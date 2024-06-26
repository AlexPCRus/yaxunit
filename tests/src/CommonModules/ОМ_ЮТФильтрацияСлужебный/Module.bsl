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

Процедура ИсполняемыеСценарии() Экспорт
	
	ЮТТесты
		.ДобавитьТест("ЭтоПодходящееРасширение")
		.ДобавитьТест("ЭтоПодходящийМодуль")
		.ДобавитьТест("ОтфильтроватьТестовыеНаборы")
		;
	
КонецПроцедуры

Процедура ЭтоПодходящееРасширение() Экспорт
	
	Варианты = Новый Массив();
	Ключи = "ИмяРасширения, Параметры, Результат, Описание";
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.extensions = ЮТКоллекции.ЗначениеВМассиве("test", "тесты");
	Варианты.Добавить(Новый Структура(Ключи, "test", Параметры, Истина, "Простой кейс"));
	Варианты.Добавить(Новый Структура(Ключи, "TeST", Параметры, Истина, "Изменен регистр"));
	Варианты.Добавить(Новый Структура(Ключи, "тесты", Параметры, Истина, "Второе расширение"));
	Варианты.Добавить(Новый Структура(Ключи, "_test", Параметры, Ложь, "Отсутствующее расширение"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Варианты.Добавить(Новый Структура(Ключи, "test", Параметры, Истина, "Без фильтр по расширениям 1"));
	Варианты.Добавить(Новый Структура(Ключи, "_test", Параметры, Истина, "Без фильтр по расширениям 2"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("test.method");
	Варианты.Добавить(Новый Структура(Ключи, "test", Параметры, Истина, "Фильтр по пути"));
	Варианты.Добавить(Новый Структура(Ключи, "_test", Параметры, Истина, "Фильтр по пути, отпустствующее расширение"));
	
	Для Каждого Вариант Из Варианты Цикл
		
		ЮТФильтрацияСлужебный.УстановитьКонтекст(Вариант.Параметры);
		Результат = ЮТФильтрацияСлужебный.ЭтоПодходящееРасширение(Вариант.ИмяРасширения);
		ЮТест.ОжидаетЧто(Результат, Вариант.Описание).Равно(Вариант.Результат);
		
	КонецЦикла;
	
КонецПроцедуры

Процедура ЭтоПодходящийМодуль() Экспорт
	
	Варианты = Новый Массив();
	Ключи = "ИмяМодуля, Параметры, Результат, Описание";
	РасширениеПоУмолчанию = "__тесты___";
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.modules = ЮТКоллекции.ЗначениеВМассиве("test", "тесты");
	Варианты.Добавить(Новый Структура(Ключи, "test", Параметры, Истина, "Простой кейс"));
	Варианты.Добавить(Новый Структура(Ключи, "TeST", Параметры, Истина, "Изменен регистр"));
	Варианты.Добавить(Новый Структура(Ключи, "тесты", Параметры, Истина, "Второй модуль"));
	Варианты.Добавить(Новый Структура(Ключи, "_test", Параметры, Ложь, "Отсутствующий модуль"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Истина, "Без фильтр по `module`"));
	Варианты.Добавить(Новый Структура(Ключи, "_module", Параметры, Истина, "Без фильтр по `_module`"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.modules = ЮТКоллекции.ЗначениеВМассиве("module");
	Параметры.filter.extensions = ЮТКоллекции.ЗначениеВМассиве(РасширениеПоУмолчанию);
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Истина, "Фильтр по модулю и по расширению с пересечением"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.modules = ЮТКоллекции.ЗначениеВМассиве("module");
	Параметры.filter.extensions = ЮТКоллекции.ЗначениеВМассиве("тесты");
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Ложь, "Фильтр по модулю и по расширению без пересечения"));
	
	// Фильтрация по именам тестовых методов
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("module.method");
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Истина, "Фильтр по имени теста"));
	Варианты.Добавить(Новый Структура(Ключи, "_test", Параметры, Ложь, "Фильтр по имени теста, отсутствующему модулю"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("module.method");
	Параметры.filter.extensions = ЮТКоллекции.ЗначениеВМассиве(РасширениеПоУмолчанию);
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Истина, "Фильтр по имени теста и по расширению с пересечением"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("module.method");
	Параметры.filter.extensions = ЮТКоллекции.ЗначениеВМассиве("test");
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Ложь, "Фильтр по имени теста и по расширению без пересечения"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("module.method");
	Параметры.filter.modules = ЮТКоллекции.ЗначениеВМассиве("module");
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Истина, "Фильтр по имени теста и по модулю с пересечением"));
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("module.method");
	Параметры.filter.modules = ЮТКоллекции.ЗначениеВМассиве("test");
	Варианты.Добавить(Новый Структура(Ключи, "module", Параметры, Ложь, "Фильтр по имени теста и по модулю без пересечения"));
	
	Для Каждого Вариант Из Варианты Цикл
		
		ЮТФильтрацияСлужебный.УстановитьКонтекст(Вариант.Параметры);
		ОписаниеМодуля = ЮТФабрикаСлужебный.ОписаниеМодуля();
		ОписаниеМодуля.Имя = Вариант.ИмяМодуля;
		ОписаниеМодуля.Расширение = РасширениеПоУмолчанию;
		Результат = ЮТФильтрацияСлужебный.ЭтоПодходящийМодуль(ОписаниеМодуля);
		ЮТест.ОжидаетЧто(Результат, Вариант.Описание + ". Имя модуля:" + Вариант.ИмяМодуля).Равно(Вариант.Результат);
		
	КонецЦикла;
	
КонецПроцедуры

Процедура ЭтоПодходящийМетод() Экспорт
	
	Варианты = Новый Массив();
	Ключи = "ИмяМодуля, Параметры, Результат, Описание";
	РасширениеПоУмолчанию = "__тесты___";
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.modules = ЮТКоллекции.ЗначениеВМассиве("test", "тесты");
	Варианты.Добавить(Новый Структура(Ключи, "test", Параметры, Истина, "Простой кейс"));
	Варианты.Добавить(Новый Структура(Ключи, "TeST", Параметры, Истина, "Изменен регистр"));
	Варианты.Добавить(Новый Структура(Ключи, "тесты", Параметры, Истина, "Второй модуль"));
	Варианты.Добавить(Новый Структура(Ключи, "_test", Параметры, Ложь, "Отсутствующий модуль"));
	
	Для Каждого Вариант Из Варианты Цикл
		
		ЮТФильтрацияСлужебный.УстановитьКонтекст(Вариант.Параметры);
		ОписаниеМодуля = ЮТФабрикаСлужебный.ОписаниеМодуля();
		ОписаниеМодуля.Имя = Вариант.ИмяМодуля;
		ОписаниеМодуля.Расширение = РасширениеПоУмолчанию;
		Результат = ЮТФильтрацияСлужебный.ЭтоПодходящийМодуль(ОписаниеМодуля);
		ЮТест.ОжидаетЧто(Результат, Вариант.Описание + ". Имя модуля:" + Вариант.ИмяМодуля).Равно(Вариант.Результат);
		
	КонецЦикла;
	
КонецПроцедуры

Процедура ОтфильтроватьТестовыеНаборы() Экспорт
	
	// 1
	Контексты = ЮТФабрика.КонтекстыВызова();
	
	ОписаниеМодуля = ЮТФабрикаСлужебный.ОписаниеМодуля();
	ОписаниеМодуля.Имя = "ТестовыйМодуль";
	ОписаниеМодуля.Расширение = "ТестовоеРасширение";
	ОписаниеМодуля.Сервер = Истина;
	ОписаниеМодуля.КлиентУправляемоеПриложение = Истина;
	
	Наборы = Новый Массив();
	Набор = ЮТФабрикаСлужебный.ОписаниеТестовогоНабора("Тесты");
	Тест = ЮТФабрикаСлужебный.ОписаниеТеста("Тест1", "Тест 1", ЮТКоллекции.ЗначениеВМассиве(Контексты.Сервер, Контексты.КлиентУправляемоеПриложение));
	Набор.Тесты.Добавить(Тест);
	Наборы.Добавить(Набор);
	
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("ТестовыйМодуль.Тест1");
	ЮТФильтрацияСлужебный.УстановитьКонтекст(Параметры);
	
	Результат = ЮТФильтрацияСлужебный.ОтфильтроватьТестовыеНаборы(Наборы, ОписаниеМодуля);
	ЮТест.ОжидаетЧто(Результат, "Результат фильтрации")
		.Заполнено()
		.ИмеетТип("Массив");
	НаборРезультата = Результат[0];
	ЮТест.ОжидаетЧто(НаборРезультата, "Набор результата")
		.Заполнено()
		.Свойство("Имя").Равно(Набор.Имя)
		.Свойство("Представление").Равно(Набор.Представление)
		.Свойство("Тесты").Заполнено();
	ТестРезультата = НаборРезультата.Тесты[0];
	ЮТест.ОжидаетЧто(ТестРезультата, "Тест результата")
		.Свойство("Имя").Равно(Тест.Имя)
		.Свойство("КонтекстВызова").ИмеетДлину(2);
	
	// 2
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("ТестовыйМодуль.Тест1.Сервер");
	ЮТФильтрацияСлужебный.УстановитьКонтекст(Параметры);
	
	Результат = ЮТФильтрацияСлужебный.ОтфильтроватьТестовыеНаборы(Наборы, ОписаниеМодуля);
	ТестРезультата = Результат[0].Тесты[0];
	ЮТест.ОжидаетЧто(ТестРезультата, "Тест с указанием контекста")
		.Свойство("Имя").Равно(Тест.Имя)
		.Свойство("КонтекстВызова").ИмеетДлину(1);
	
	// 3
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("ТестовыйМодуль.Тест1.ВызовСервера");
	ЮТФильтрацияСлужебный.УстановитьКонтекст(Параметры);
	
	Результат = ЮТФильтрацияСлужебный.ОтфильтроватьТестовыеНаборы(Наборы, ОписаниеМодуля);
	ЮТест.ОжидаетЧто(Результат, "Тест с указаниме недоступного контекста")
		.ИмеетДлину(1);
	
	// 4
	Параметры = ЮТФабрика.ПараметрыЗапуска();
	Параметры.filter.tests = ЮТКоллекции.ЗначениеВМассиве("ТестовыйМодуль.Тест1.Сервер");
	Параметры.filter.contexts = ЮТКоллекции.ЗначениеВМассиве(Контексты.КлиентУправляемоеПриложение);
	ЮТФильтрацияСлужебный.УстановитьКонтекст(Параметры);
	
	Результат = ЮТФильтрацияСлужебный.ОтфильтроватьТестовыеНаборы(Наборы, ОписаниеМодуля);
	ЮТест.ОжидаетЧто(Результат, "Тест с указаниме контекста и фильтра контекстов")
		.ИмеетДлину(0);
	
КонецПроцедуры

#КонецОбласти
