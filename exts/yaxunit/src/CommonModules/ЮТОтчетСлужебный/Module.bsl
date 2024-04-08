//©///////////////////////////////////////////////////////////////////////////©//
//
//  Copyright 2021-2024 BIA-Technologies Limited Liability Company
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
//©///////////////////////////////////////////////////////////////////////////©//

#Область СлужебныйПрограммныйИнтерфейс

// СформироватьОтчет
//  Формирует отчет о результатах тестирования по заданным параметрам
// Параметры:
//  РезультатВыполнения - Массив из см. ЮТФабрикаСлужебный.ОписаниеИсполняемогоТестовогоМодуля
//  ПараметрыЗапуска - Структура - Параметры запуска, см. ЮТФабрика.ПараметрыЗапуска
//  Обработчик - ОписаниеОповещения
Процедура СформироватьОтчет(РезультатВыполнения, ПараметрыЗапуска, Обработчик) Экспорт
	
	Если НЕ ЗначениеЗаполнено(ПараметрыЗапуска.reportPath) Тогда
		ЮТЛогирование.Ошибка("Не указан путь сохранения отчета");
		ЮТАсинхроннаяОбработкаСлужебныйКлиент.ВызватьОбработчик(Обработчик);
		Возврат;
	КонецЕсли;
	
	ПараметрыФормирования = МодульФормирования(ПараметрыЗапуска.reportFormat);
	
	Если ПараметрыФормирования = Неопределено Тогда
		ЮТЛогирование.Ошибка(СтрШаблон("Отчет в формате `%1` не поддерживается", ПараметрыЗапуска.reportFormat));
		ЮТАсинхроннаяОбработкаСлужебныйКлиент.ВызватьОбработчик(Обработчик);
		Возврат;
	КонецЕсли;
	
	МодульОтчета = ПараметрыФормирования.Модуль;
	Формат = ПараметрыФормирования.Формат;
	ПараметрыФормирования = Новый Структура("РезультатВыполнения, ПараметрыЗапуска, Обработчик", РезультатВыполнения, ПараметрыЗапуска, Обработчик);
	ПараметрыФормирования.Вставить("МодульОтчета", МодульОтчета);
	ПараметрыФормирования.Вставить("Формат", Формат);
	
	ОбработчикПолученияИмениФайла = Новый ОписаниеОповещения("ПослеФормированияИмениФайла", ЭтотОбъект, ПараметрыФормирования);
	ПодготовитьИмяФайлаОтчета(ПараметрыФормирования, ОбработчикПолученияИмениФайла);
	
КонецПроцедуры

// Поддерживаемые форматы отчетов.
// 
// Возвращаемое значение:
//  Структура - Поддерживаемые форматы отчетов
//				+ Ключ - Идентификатор формата
//				+ Значение - см. ЮТФабрикаСлужебный.ОписаниеФорматаОтчета
Функция ПоддерживаемыеФорматыОтчетов() Экспорт
	
	Модули = ЮТПодключаемыеМодулиСлужебный.ГенераторыОтчетов();
	Форматы = Новый Структура;
	
	Для Каждого Модуль Из Модули Цикл
		
		Параметры = Модуль.ПараметрыГенерацииОтчета();
		ЮТКоллекции.ДополнитьСтруктуру(Форматы, Параметры.Форматы);
		
	КонецЦикла;
	
	Возврат Форматы;
	
КонецФункции

#КонецОбласти

#Область СлужебныеПроцедурыИФункции

Процедура СформироватьОтчетВФормате(РезультатВыполнения, ГенераторОтчета, ИмяФайлаОтчета, Формат, Обработчик)
	
	Если Формат.СамостоятельнаяЗаписьОтчета Тогда
		ГенераторОтчета.ЗаписатьОтчет(РезультатВыполнения, ИмяФайлаОтчета, Формат, Обработчик)
	Иначе
		ДанныеОтчета = ГенераторОтчета.ДанныеОтчета(РезультатВыполнения, Формат);
		
		Если ДанныеОтчета = Неопределено Тогда
			ЮТЛогирование.Ошибка("Не удалось получить данные отчета");
		Иначе
			ДанныеОтчета.Записать(ИмяФайлаОтчета);
		КонецЕсли;
	КонецЕсли;
	
	ЮТАсинхроннаяОбработкаСлужебныйКлиент.ВызватьОбработчик(Обработчик);
	
КонецПроцедуры

Процедура ПодготовитьИмяФайлаОтчета(ПараметрыФормирования, Обработчик)
	
	ПараметрыПроверки = Новый Структура("ПараметрыФормирования, Обработчик", ПараметрыФормирования, Обработчик);
	
	ОбработчикПроверки = Новый ОписаниеОповещения("ПослеПроверкиСуществования", ЭтотОбъект, ПараметрыПроверки);
	ЮТФайлы.Существует(ПараметрыФормирования.ПараметрыЗапуска.reportPath, ОбработчикПроверки);
	
КонецПроцедуры

Функция МодульФормирования(Формат)
	
	Модули = ЮТПодключаемыеМодулиСлужебный.ГенераторыОтчетов();
	
	Для Каждого Модуль Из Модули Цикл
		
		Параметры = Модуль.ПараметрыГенерацииОтчета();
		Если Параметры.Форматы.Свойство(Формат) Тогда
			Возврат Новый Структура("Модуль, Формат", Модуль, Параметры.Форматы[Формат]);
		КонецЕсли;
		
	КонецЦикла;
	
	Возврат Неопределено;
	
КонецФункции

Процедура ПослеПроверкиСуществования(Существует, Параметры) Экспорт
	
	ПутьКОтчету = Параметры.ПараметрыФормирования.ПараметрыЗапуска.reportPath;
	Если Существует Тогда
		ОбработчикПроверки = Новый ОписаниеОповещения("ПослеПроверкиКаталога", ЭтотОбъект, Параметры);
		ЮТФайлы.ЭтоКаталог(ПутьКОтчету, ОбработчикПроверки);
		Возврат
	КонецЕсли;
	
	Формат = Параметры.ПараметрыФормирования.Формат;
	Если Формат.ЗаписьВКаталог Тогда
		НачатьСозданиеКаталога(Новый ОписаниеОповещения("ПослеСозданияКаталогаОтчета", ЭтотОбъект, Параметры), ПутьКОтчету);
	Иначе
		ПослеПроверкиКаталога(Ложь, Параметры);
	КонецЕсли;
	
КонецПроцедуры

Процедура ПослеСозданияКаталогаОтчета(ИмяКаталога, Параметры) Экспорт
	
	ПослеПроверкиКаталога(Истина, Параметры);
	
КонецПроцедуры

Процедура ПослеПроверкиКаталога(ЭтоКаталог, Параметры) Экспорт
	
	ПутьКОтчету = Параметры.ПараметрыФормирования.ПараметрыЗапуска.reportPath;
	Формат = Параметры.ПараметрыФормирования.Формат;
	
	Если НЕ Формат.ЗаписьВКаталог И ЭтоКаталог Тогда
		ИмяФайла = ЮТФайлы.ОбъединитьПути(ПутьКОтчету, Формат.ИмяФайлаПоУмолчанию);
	Иначе
		ИмяФайла = ПутьКОтчету;
	КонецЕсли;
	
	ЮТАсинхроннаяОбработкаСлужебныйКлиент.ВызватьОбработчик(Параметры.Обработчик, ИмяФайла);
	
КонецПроцедуры

Процедура ПослеФормированияИмениФайла(ИмяФайлаОтчета, Параметры) Экспорт
	
	СформироватьОтчетВФормате(Параметры.РезультатВыполнения, Параметры.МодульОтчета, ИмяФайлаОтчета, Параметры.Формат, Параметры.Обработчик);
	
КонецПроцедуры

#КонецОбласти
