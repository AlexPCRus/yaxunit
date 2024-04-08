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

// ПараметрыЗапуска
//  Возвращает загруженные параметры запуска тестирования
// Параметры:
//  ПараметрыЗапускаСтрокой - Строка - Параметры запуска приложения
//  Обработчик - ОписаниеОповещения
// 
// Возвращаемое значение:
//  см. ЮТФабрика.ПараметрыЗапуска
Функция ПараметрыЗапуска(Знач ПараметрыЗапускаСтрокой, Обработчик) Экспорт
	
	Попытка
		
		Параметры = ПрочитатьПараметрыЗапуска(ПараметрыЗапускаСтрокой, Обработчик);
		
	Исключение
		
		ЮТРегистрацияОшибокСлужебный.ЗарегистрироватьОшибкуИнициализацииДвижка(ИнформацияОбОшибке(), "Ошибка чтения параметров запуска");
		Параметры = ЮТФабрика.ПараметрыЗапуска();
		
	КонецПопытки;
	
	Возврат Параметры;
	
КонецФункции

Функция КлючЗапуска() Экспорт
	
	Возврат "RunUnitTests";
	
КонецФункции

#КонецОбласти

#Область СлужебныеПроцедурыИФункции

// ПрочитатьПараметрыЗапуска
// 	Читает параметры из строки запуска
// Параметры:
//  ПараметрыЗапускаСтрокой - Строка - Строка с параметрами запуска. 
//                                     Содержит ключ запуска и строку с конфигурационным файлом. 
//                                     Формат строки "RunUnitTests=/путь/к/конфигурационному/файлу", 
//                                     где ключ указывается обязательно, а путь - по желанию
// Обработчик - ОписаниеОповещения
// 
// Возвращаемое значение:
//  см. ЮТФабрика.ПараметрыЗапуска
Функция ПрочитатьПараметрыЗапуска(Знач ПараметрыЗапускаСтрокой, Обработчик)
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	ЮТСобытияСлужебный.УстановитьПараметрыЗапускаПоУмолчанию(Параметры);
	
	Если Не ЗначениеЗаполнено(ПараметрыЗапускаСтрокой) Тогда
		ЮТАсинхроннаяОбработкаСлужебныйКлиент.ВызватьОбработчик(Обработчик, Параметры);
		Возврат Параметры;
	КонецЕсли;
	
	ПарыКлючЗначение = ЮТСтроки.РазделитьСтроку(ПараметрыЗапускаСтрокой, ";");
	
	ПараметрыЗапуска = Новый Структура;
	
	Для Каждого Пара Из ПарыКлючЗначение Цикл
		
		Если ПустаяСтрока(Пара) Тогда
			Продолжить;
		КонецЕсли;
		
		КлючЗначение = ЮТСтроки.РазделитьСтроку(Пара, "=");
		
		Если КлючЗначение.Количество() = 1 Тогда
			ПараметрыЗапуска.Вставить(КлючЗначение[0], Истина);
		Иначе
			ПараметрыЗапуска.Вставить(КлючЗначение[0], КлючЗначение[1]);
		КонецЕсли;
		
	КонецЦикла;
	
	ЗначениеКлючаЗапуска = ЮТКоллекции.ЗначениеСтруктуры(ПараметрыЗапуска, КлючЗапуска(), Ложь);
	
	Если ТипЗнч(ЗначениеКлючаЗапуска) = Тип("Булево") Тогда
		
		Параметры.ВыполнятьМодульноеТестирование = ЗначениеКлючаЗапуска;
		Параметры.showReport = Истина;
		Параметры.closeAfterTests = Ложь;
		
	ИначеЕсли ТипЗнч(ЗначениеКлючаЗапуска) = Тип("Строка") Тогда
		
		Параметры.ВыполнятьМодульноеТестирование = Истина;
		КонфигурационныйФайл = ЗначениеКлючаЗапуска;
		
	КонецЕсли;
	
	Если ЗначениеЗаполнено(КонфигурационныйФайл) Тогда
		
		ПараметрыИзФайла = ПрочитатьКонфигурационныйФайл(КонфигурационныйФайл);
		ДополнитьПараметрыПрочитанными(Параметры, ПараметрыИзФайла);
		
	КонецЕсли;
	
	ЮТАсинхроннаяОбработкаСлужебныйКлиент.ВызватьОбработчик(Обработчик, Параметры);
	
	Возврат Параметры;
	
КонецФункции

Функция ПрочитатьКонфигурационныйФайл(ПутьКФайлу)
	
#Если НЕ ВебКлиент Тогда
	
	Если ЮТОбщий.УстановленБезопасныйРежим() Тогда
		ВызватьИсключение "Расширение подключено в безопасном режиме. Чтение конфигурационного файла недоступно";
	КонецЕсли;
	
	ДанныеФайла = Неопределено;
	
	Попытка
		
		Текст = ЮТОбщий.ДанныеТекстовогоФайла(ПутьКФайлу);
		
		Если ЗначениеЗаполнено(Текст) Тогда
			ДанныеФайла = ЮТОбщий.ЗначениеИзJSON(Текст);
		КонецЕсли;
		
	Исключение
		
		ВызватьИсключение;
		
	КонецПопытки;
	
	Возврат ДанныеФайла;
	
#Иначе
	// будут использованы параметры по умолчанию
	Возврат Новый Структура;
#КонецЕсли

КонецФункции

Процедура ДополнитьПараметрыПрочитанными(Параметры, ДанныеДополнения)
	
	Для Каждого Параметр Из ДанныеДополнения Цикл
		
		Если НЕ Параметры.Свойство(Параметр.Ключ) Тогда
			Продолжить;
		КонецЕсли;
		
		Если ТипЗнч(Параметры[Параметр.Ключ]) = ТипЗнч(Параметр.Значение) Тогда
			
			Параметры[Параметр.Ключ] = Параметр.Значение;
			
		КонецЕсли;
		
	КонецЦикла;
	
КонецПроцедуры

#КонецОбласти
