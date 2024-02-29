//©///////////////////////////////////////////////////////////////////////////©//
//
//  Copyright 2021-2023 BIA-Technologies Limited Liability Company
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

// Сравнивает данные сложной структуры с учетом вложенности.
//
// Параметры:
//  Данные1 - Структура
//          - ФиксированнаяСтруктура
//          - Соответствие из Произвольный
//          - ФиксированноеСоответствие из Произвольный
//          - Массив из Произвольный
//          - ФиксированныйМассив из Произвольный
//          - Строка
//          - Число
//          - Булево
//          - ТаблицаЗначений
//          - ХранилищеЗначения
//  Данные2 - Произвольный - те же типы, что и для параметра Данные1.
//  ПараметрыСравнения - Структура - Параметры проверки:
//                       * ГлубокийАнализ - Булево - Использовать сериализацию и прочие алгоритмы сравнения
// Возвращаемое значение:
//  Булево - Истина, если совпадают.
//
Функция ЗначенияРавны(Данные1, Данные2, ПараметрыСравнения = Неопределено) Экспорт
	
	ТипЗначения = ТипЗнч(Данные1);
	Если ТипЗначения <> ТипЗнч(Данные2) Тогда
		Возврат Ложь;
	КонецЕсли;
	
	Если Данные1 = Данные2 Тогда
		Возврат Истина;
	КонецЕсли;
	
	Результат = Неопределено;
	
	Если ЭтоТипСтруктура(ТипЗначения) Тогда
		
		Результат = СтруктурыРавны(Данные1, Данные2);
		
	ИначеЕсли ЭтоТипСоответствие(ТипЗначения) Тогда
		
		Результат = СоответствияРавны(Данные1, Данные2);
		
	ИначеЕсли ЭтоТипМассива(ТипЗначения) Тогда
		
		Результат = МассивыРавны(Данные1, Данные2);
		
	ИначеЕсли ТипЗначения = Тип("ТабличныйДокумент") Тогда
		
		Результат = ЮТСравнениеСервер.ТабличныеДокументыРавны(Данные1, Данные2);
		
	ИначеЕсли ЭтоПримитивныйТип(ТипЗначения) ИЛИ ЮТОбщий.ОписаниеТиповЛюбаяСсылка().СодержитТип(ТипЗначения) Тогда
		// Возвращаем ложь, так как для этих типов должно сработать обычное равенство
		Результат = Ложь;
	КонецЕсли; // BSLLS:IfElseIfEndsWithElse-off
	
#Если Сервер Тогда
	Если ТипЗначения = Тип("ТаблицаЗначений") Тогда
		
		Результат = ЮТСравнениеСервер.ТаблицыРавны(Данные1, Данные2);
		
	ИначеЕсли ТипЗначения = Тип("ХранилищеЗначения") Тогда
		
		Результат = ЗначенияРавны(Данные1.Получить(), Данные2.Получить());
		
	КонецЕсли; // BSLLS:IfElseIfEndsWithElse-off
#КонецЕсли
	
	Если Результат = Неопределено И ПараметрыСравнения <> Неопределено И ЮТОбщий.ЗначениеСтруктуры(ПараметрыСравнения, "ГлубокийАнализ", Ложь) Тогда
		Результат = СравнитьПоЗначению(Данные1, Данные2);
	КонецЕсли;
	
	Если Результат = Неопределено Тогда
		Результат = Ложь;
	КонецЕсли;
	
	Возврат Результат;
	
КонецФункции

Функция ПроверитьНеравенство(ПроверяемоеЗначение, ОжидаемоеЗначение, Больше = Ложь, Меньше = Ложь, Равно = Ложь) Экспорт
	
	Результат = Ложь;
	
	Если Больше Тогда
		Результат = ПроверяемоеЗначение > ОжидаемоеЗначение;
	КонецЕсли;
	
	Если Меньше Тогда
		Результат = Результат ИЛИ ПроверяемоеЗначение < ОжидаемоеЗначение;
	КонецЕсли;
	
	Если Равно Тогда
		Результат = Результат ИЛИ ПроверяемоеЗначение = ОжидаемоеЗначение;
	КонецЕсли;
	
	Возврат Результат;
	
КонецФункции

// Параметры проверки.
// 
// Параметры:
//  ВидСравнения - Строка
//  ПроверяемоеЗначение - Произвольный
//  ИмяСвойства - Строка
//  ОжидаемоеЗначение - Произвольный
//  Реверс - Булево
// 
// Возвращаемое значение:
//  Структура - Параметры проверки:
// * ОбъектПроверки - см. ЮТФабрика.ОписаниеПроверяемогоЗначения
// * ПрефиксОшибки - Строка, Неопределено -
// * ОписаниеПроверки - Строка, Неопределено -
// * ВидСравнения - Строка
// * ОжидаемоеЗначение - Произвольный, Неопределено - 
// * Реверс - Булево
// * ТекстПроверяемоеЗначение - Строка
Функция ПараметрыПроверки(ВидСравнения, ПроверяемоеЗначение, ИмяСвойства, ОжидаемоеЗначение, Реверс = Ложь) Экспорт
	
	Параметры = ЮТФабрика.ОписаниеПроверки(ПроверяемоеЗначение);
	Параметры.ОбъектПроверки.ИмяСвойства = ИмяСвойства;
	Параметры.Вставить("ВидСравнения", ВидСравнения);
	Параметры.Вставить("ОжидаемоеЗначение", ОжидаемоеЗначение);
	Параметры.Вставить("Реверс", Реверс);
	
	Параметры.Вставить("ТекстПроверяемоеЗначение", "проверяемое значение");
	
	Возврат Параметры;
	
КонецФункции

#КонецОбласти

#Область СлужебныеПроцедурыИФункции

#Область Сравнения

Функция СтруктурыРавны(Данные1, Данные2)
	
	Если Данные1.Количество() <> Данные2.Количество() Тогда
		Возврат Ложь;
	КонецЕсли;
	
	Для Каждого КлючИЗначение Из Данные1 Цикл
		СтароеЗначение = Неопределено;
		
		Если НЕ Данные2.Свойство(КлючИЗначение.Ключ, СтароеЗначение)
			ИЛИ НЕ ЗначенияРавны(КлючИЗначение.Значение, СтароеЗначение) Тогда
			Возврат Ложь;
		КонецЕсли;
	КонецЦикла;
	
	Возврат Истина;
		
КонецФункции

Функция СоответствияРавны(Данные1, Данные2)
	
	Если Данные1.Количество() <> Данные2.Количество() Тогда
		Возврат Ложь;
	КонецЕсли;
	
	КлючиНовогоСоответствия = Новый Соответствие;
	
	Для Каждого КлючИЗначение Из Данные1 Цикл
		КлючиНовогоСоответствия.Вставить(КлючИЗначение.Ключ, Истина);
		СтароеЗначение = Данные2.Получить(КлючИЗначение.Ключ);
		
		Если НЕ ЗначенияРавны(КлючИЗначение.Значение, СтароеЗначение) Тогда
			Возврат Ложь;
		КонецЕсли;
	КонецЦикла;
	
	Для Каждого КлючИЗначение Из Данные2 Цикл
		Если КлючиНовогоСоответствия[КлючИЗначение.Ключ] = Неопределено Тогда
			Возврат Ложь;
		КонецЕсли;
	КонецЦикла;
	
	Возврат Истина;
	
КонецФункции

Функция МассивыРавны(Данные1, Данные2)
	
	Если Данные1.Количество() <> Данные2.Количество() Тогда
		Возврат Ложь;
	КонецЕсли;
	
	Для Индекс = 0 По Данные1.ВГраница() Цикл
		Если НЕ ЗначенияРавны(Данные1[Индекс], Данные2[Индекс]) Тогда
			Возврат Ложь;
		КонецЕсли;
	КонецЦикла;
	
	Возврат Истина;
	
КонецФункции

Функция ПроверитьТипЗначения(РезультатПроверки,
							 Значение,
							 Знач ОжидаемыйТип,
							 Описание = "ожидаемого значения",
							 ЕслиУстановлен = Ложь,
							 Суффикс = Неопределено)
	
	Если ЕслиУстановлен И Значение = Неопределено Тогда
		Возврат Истина;
	КонецЕсли;
	
	Соответствует = ЮТПроверкиСлужебный.ТипЗначенияСоответствует(Значение, ОжидаемыйТип);
	
	Если НЕ Соответствует Тогда
		ТекстОшибки = СтрШаблон("Не верный тип %1 (`%2`), должен быть `%3`%4",
								Описание,
								ТипЗнч(Значение),
								ОжидаемыйТип,
								Суффикс);
		ЮТРегистрацияОшибок.ДобавитьОшибкуКРезультатуПроверки(РезультатПроверки, ТекстОшибки);
	КонецЕсли;
	
	Возврат Соответствует;
	
КонецФункции

Функция СравнитьПоЗначению(Значение1, Значение2)
	
	Попытка
		СтрокаСравнения1 = ЮТОбщий.СтрокаJSON(Значение1);
		СтрокаСравнения2 = ЮТОбщий.СтрокаJSON(Значение2);
		Возврат СтрокаСравнения1 = СтрокаСравнения2;
	Исключение
		Возврат Ложь;
	КонецПопытки;
	
КонецФункции

#КонецОбласти

Функция ЗначениеИмеетСвойство(Значение, Свойство)
	
	Результат = Ложь;
	ТипЗначения = ТипЗнч(Значение);
	
	Если ТипЗначения = Тип("Структура") Или ТипЗначения = Тип("ФиксированнаяСтруктура") Тогда
		
		Результат = Значение.Свойство(Свойство);
		
	ИначеЕсли ТипЗначения = Тип("Соответствие") Или ТипЗначения = Тип("ФиксированноеСоответствие") Тогда
		
		Для Каждого КлючЗначение Из Значение Цикл
			
			Если КлючЗначение.Ключ = Свойство И ТипЗнч(КлючЗначение.Ключ) = ТипЗнч(Свойство) Тогда
				Результат = Истина;
				Прервать;
			КонецЕсли;
			
		КонецЦикла;
		
	ИначеЕсли ТипЗнч(Свойство) = Тип("Число") Тогда
		
		Если Свойство < 0 Тогда
			Свойство = Значение.Количество() + Свойство;
		КонецЕсли;
		Результат = Свойство >= 0 И Значение.Количество() > Свойство;
		
	Иначе
		
		Результат = ЮТОбщий.ПеременнаяСодержитСвойство(Значение, Свойство);
		
	КонецЕсли;
	
	Возврат Результат;
	
КонецФункции

// Параметры проверки.
// 
// Параметры:
//  ПараметрыПроверки - см. ПараметрыПроверки
// 
// Возвращаемое значение:
//  Произвольный
Функция ПроверяемоеЗначение(ПараметрыПроверки)
	
	Если ПараметрыПроверки.ОбъектПроверки.ИмяСвойства <> Неопределено Тогда
		Значение = ЮТОбщий.ЗначениеСвойства(ПараметрыПроверки.ОбъектПроверки.Значение, ПараметрыПроверки.ОбъектПроверки.ИмяСвойства);
	Иначе
		Значение = ПараметрыПроверки.ОбъектПроверки.Значение;
	КонецЕсли;
	
	Возврат Значение;
	
КонецФункции

Функция ДлинаЗначения(ПроверяемоеЗначение)
	
	ТипПроверяемогоЗначения = ТипЗнч(ПроверяемоеЗначение);
	
	Если ТипПроверяемогоЗначения = Тип("Строка") ИЛИ ТипПроверяемогоЗначения = Тип("ФорматированнаяСтрока") Тогда
		
		ФактическаяДлина = СтрДлина(ПроверяемоеЗначение);
		
	Иначе
		
		Попытка
			ФактическаяДлина = ПроверяемоеЗначение.Количество();
		Исключение
			ФактическаяДлина = Неопределено;
		КонецПопытки;
		
	КонецЕсли;
	
	Возврат ФактическаяДлина;
	
КонецФункции

Функция СоответствуетШаблону(ПроверяемаяСтрока, РегулярноеВыражение)

	РегулярныеВыражения = ЮТКомпоненты.РегулярныеВыражения();
	
	Попытка
		Результат = РегулярныеВыражения.Совпадает(Строка(ПроверяемаяСтрока), РегулярноеВыражение);
	Исключение
		ЮТРегистрацияОшибок.ДобавитьПояснениеОшибки("Ошибка проверки строки по шаблону " + РегулярноеВыражение);
		ЮТРегистрацияОшибок.ДобавитьПояснениеОшибки(РегулярныеВыражения.ОписаниеОшибки);
		ВызватьИсключение;
	КонецПопытки;
	
	Возврат Результат;
	
КонецФункции

Функция НайтиЗначение(ПроверяемоеЗначение, ОжидаемоеЗначение)
	
	ТипПроверяемогоЗначения = ТипЗнч(ПроверяемоеЗначение);
	
	Если ТипПроверяемогоЗначения = Тип("Строка") Или ТипПроверяемогоЗначения = Тип("ФорматированнаяСтрока") Тогда
		
		ИскомоеЗначениеНайдено = СтрНайти(ПроверяемоеЗначение, ОжидаемоеЗначение) > 0;
		
	ИначеЕсли ЭтоТипМассива(ТипПроверяемогоЗначения) Тогда
		
		Индекс = ПроверяемоеЗначение.Найти(ОжидаемоеЗначение);
		ИскомоеЗначениеНайдено = Индекс <> Неопределено;
		
	ИначеЕсли ЭтоТипКлючЗначение(ТипПроверяемогоЗначения) Тогда
		
		ИскомоеЗначениеНайдено = Ложь;
		ТипОжидаемогоЗначения = ТипЗнч(ОжидаемоеЗначение);
		
		Для Каждого КлючЗначение Из ПроверяемоеЗначение Цикл
			Если КлючЗначение.Значение = ОжидаемоеЗначение И ТипЗнч(КлючЗначение.Значение) = ТипОжидаемогоЗначения Тогда
				ИскомоеЗначениеНайдено = Истина;
				Прервать;
			КонецЕсли;
		КонецЦикла;
		
	ИначеЕсли ТипПроверяемогоЗначения = Тип("СписокЗначений") Тогда
		
		ИскомоеЗначениеНайдено = ПроверяемоеЗначение.НайтиПоЗначению(ОжидаемоеЗначение) <> Неопределено;
		
	ИначеЕсли ПроверяемоеЗначение <> Неопределено И ЮТОбщий.МетодОбъектаСуществует(ПроверяемоеЗначение, "Найти") Тогда
		
		ИскомоеЗначениеНайдено = ПроверяемоеЗначение.Найти(ОжидаемоеЗначение) <> Неопределено;
		
	Иначе
		
		ИскомоеЗначениеНайдено = Неопределено; // Обрабатывается вызывающим методом
		
	КонецЕсли;
	
	Возврат ИскомоеЗначениеНайдено;
	
КонецФункции

Функция ЭтоТипМассива(Тип)
	
	Возврат Тип = Тип("Массив") Или Тип = Тип("ФиксированныйМассив");
	
КонецФункции

Функция ЭтоТипСтруктура(Тип)
	
	Возврат Тип = Тип("Структура") Или Тип = Тип("ФиксированнаяСтруктура");
	
КонецФункции

Функция ЭтоТипСоответствие(Тип)
	
	Возврат Тип = Тип("Соответствие") Или Тип = Тип("ФиксированноеСоответствие");
	
КонецФункции

Функция ЭтоТипКлючЗначение(Тип)
	
	Возврат ЭтоТипСтруктура(Тип) ИЛИ ЭтоТипСоответствие(Тип);
	
КонецФункции

Функция ЭтоПримитивныйТип(ТипЗначения)
	
	Возврат ТипЗначения = Тип("Число")
			ИЛИ ТипЗначения = Тип("Строка")
			ИЛИ ТипЗначения = Тип("Дата")
			ИЛИ ТипЗначения = Тип("Булево");
	
КонецФункции

#Область РеализацияПредикатор

Процедура ПроверитьВыражениеПредиката(Значение, Выражение, СтатусПроверки, ПараметрыСообщенийОбОшибке, ПараметрыСравнения) Экспорт
	
	Попытка
		ВызватьОбработчикПредиката(Значение, Выражение, СтатусПроверки, ПараметрыСообщенийОбОшибке, ПараметрыСравнения);
	Исключение
		ЮТРегистрацияОшибок.ДобавитьОшибкуКРезультатуПроверки(СтатусПроверки, ИнформацияОбОшибке());
	КонецПопытки;
	
КонецПроцедуры

// Вычислить выражение предиката.
// 
// Параметры:
//  Значение - Произвольный - Значение
//  Выражение - см. ЮТФабрика.ВыражениеПредиката
//  СтатусПроверки - см. ЮТФабрика.ОписаниеРезультатаПроверки
//  ПараметрыСообщенийОбОшибке - см. ПараметрыСообщенийОбОшибке
//  ПараметрыСравнения - Неопределено
//                     - Структура - Параметры сравнения значений, для разных выражений испльзуются свои параметры
Процедура ВызватьОбработчикПредиката(Значение, Выражение, СтатусПроверки, ПараметрыСообщенийОбОшибке, ПараметрыСравнения)
	
// BSLLS:CognitiveComplexity-off
	ВидыСравнения = ЮТПредикаты.Выражения();
	
	ПараметрыПроверки = ПараметрыПроверки(Выражение.ВидСравнения, Значение, Выражение.ИмяРеквизита, Выражение.Значение, Ложь);
	
	ПараметрыПроверки.ОписаниеПроверки = ПараметрыСообщенийОбОшибке.ОписаниеПроверки;
	ПараметрыПроверки.ТекстПроверяемоеЗначение = ПараметрыСообщенийОбОшибке.ТекстПроверяемоеЗначение;
	ПараметрыПроверки.ОбъектПроверки.Представление = ПараметрыСообщенийОбОшибке.ПредставлениеПроверяемогоЗначения;
	
	Если СтрНачинаетсяС(Выражение.ВидСравнения, "Не") И ВидыСравнения.Свойство(Сред(Выражение.ВидСравнения, 3)) Тогда
		ПараметрыПроверки.Реверс = Истина;
		ВидСравненияВыражения = Сред(Выражение.ВидСравнения, 3);
	Иначе
		ВидСравненияВыражения = Выражение.ВидСравнения;
	КонецЕсли;
	
	Результат = Неопределено;
	
	ОжидаемоеЗначение = Выражение.Значение;
	ПроверяемоеЗначение = ПроверяемоеЗначение(ПараметрыПроверки);
	
	Если ВидСравненияВыражения = ВидыСравнения.Равно Тогда
		
		Результат = ЗначенияРавны(ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыСравнения);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.Заполнено Тогда
		
		Результат = ЗначениеЗаполнено(ПроверяемоеЗначение);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.Больше Тогда
		
		Результат = ПроверитьНеравенство(ПроверяемоеЗначение, ОжидаемоеЗначение, Истина);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.БольшеРавно Тогда
		
		Результат = ПроверитьНеравенство(ПроверяемоеЗначение, ОжидаемоеЗначение, Истина, , Истина);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.Меньше Тогда
		
		Результат = ПроверитьНеравенство(ПроверяемоеЗначение, ОжидаемоеЗначение, , Истина);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.МеньшеРавно Тогда
		
		Результат = ПроверитьНеравенство(ПроверяемоеЗначение, ОжидаемоеЗначение, , Истина, Истина);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.ИмеетТип Тогда
		
		ПроверитьТипПараметра(СтатусПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.ИмеетСвойство Тогда
		
		Результат = ПроверитьНаличиеСвойства(СтатусПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.ИмеетДлину Тогда
		
		ПроверитьДлину(СтатусПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.Содержит Тогда
		
		Результат = ПроверитьСодержит(СтатусПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки);
		
	ИначеЕсли ВидСравненияВыражения = ВидыСравнения.СодержитСтрокуПоШаблону Тогда
		
		Результат = ПроверитьСоответствуетШаблону(СтатусПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки);
		
	Иначе
		
		ВызватьИсключение СтрШаблон("Неизвестное выражение предиката `%1`", Выражение.ВидСравнения);
		
	КонецЕсли;
// BSLLS:CognitiveComplexity-on
	
	Если Результат = Неопределено Тогда
		Возврат;
	КонецЕсли;
	
	Если ПараметрыПроверки.Реверс Тогда
		Результат = НЕ Результат;
	КонецЕсли;
	
	ОбработатьРезультатСравнения(Результат, СтатусПроверки, ПараметрыПроверки, ПроверяемоеЗначение);
	
КонецПроцедуры

Процедура ОбработатьРезультатСравнения(Результат, РезультатПроверки, ПараметрыПроверки, ФактическоеЗначение)
	
	Если Результат Тогда
		Возврат;
	КонецЕсли;
	
	ШаблонСообщения = ЮТПредикатыКлиентСервер.ШаблонВыражения(ПараметрыПроверки.ВидСравнения);
	Сообщение = ЮТСообщенияСлужебный.ПодставитьПредставлениеЗначенияВШаблон(ШаблонСообщения, ПараметрыПроверки.ОжидаемоеЗначение);
	
	ТекстОшибки = ЮТСообщенияСлужебный.ФорматированныйТекстОшибкиУтверждения(ПараметрыПроверки, Сообщение, ПараметрыПроверки.ТекстПроверяемоеЗначение);
	ТекстОшибки = ЮТРегистрацияОшибок.ДобавитьОписания(ТекстОшибки, ПараметрыПроверки);
	
	ЮТРегистрацияОшибок.ДобавитьОшибкуСравненияКРезультатуПроверки(РезультатПроверки,
																   ТекстОшибки,
																   ФактическоеЗначение,
																   ПараметрыПроверки.ОжидаемоеЗначение);
	
КонецПроцедуры

Процедура ПроверитьТипПараметра(РезультатПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки)
	
	Если НЕ ПроверитьТипЗначения(РезультатПроверки, ОжидаемоеЗначение, Новый ОписаниеТипов("ОписаниеТипов, Тип, Строка")) Тогда
		Возврат;
	КонецЕсли;
	
	Результат = ЮТПроверкиСлужебный.ТипЗначенияСоответствует(ПроверяемоеЗначение, ПараметрыПроверки.ОжидаемоеЗначение);
	
	Если ПараметрыПроверки.Реверс Тогда
		Результат = НЕ Результат;
	КонецЕсли;
	
	ОбработатьРезультатСравнения(Результат, РезультатПроверки, ПараметрыПроверки, ТипЗнч(ПроверяемоеЗначение));
	
КонецПроцедуры

Функция ПроверитьНаличиеСвойства(РезультатПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение)
	
	Значение = ПроверяемоеЗначение;
	
	ПутьКСвойству = ЮТОбщий.ЧастиПути(ОжидаемоеЗначение);
	
	ПройденныйПуть = Новый Массив();
	
	Для Каждого Часть Из ПутьКСвойству Цикл
		
		ПройденныйПуть.Добавить(Часть);

		Если ТипЗнч(Значение) = Тип("ХранилищеЗначения") Тогда
#Если ВебКлиент Или ТонкийКлиент Тогда
			Значение = ЮТОбщийВызовСервера.ИзХранилищаЗначений(Значение);			
#Иначе		
			Значение = Значение.Получить();
#КонецЕсли
		КонецЕсли;
	
		Попытка
			ЕстьСвойство = ЗначениеИмеетСвойство(Значение, Часть);
		Исключение
			ЕстьСвойство = Ложь;
		КонецПопытки;
		
		Если ЕстьСвойство Тогда
			Значение = Значение[Часть];
		Иначе
			Прервать;
		КонецЕсли;
		
	КонецЦикла;
	
	Возврат ЕстьСвойство;
	
КонецФункции

Процедура ПроверитьДлину(РезультатПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки)
	
	Если НЕ ПроверитьТипЗначения(РезультатПроверки, ОжидаемоеЗначение, "Число") Тогда
		Возврат;
	КонецЕсли;
	
	ФактическаяДлина = ДлинаЗначения(ПроверяемоеЗначение);
	
	Если ФактическаяДлина = Неопределено Тогда
		ТекстОшибки = СтрШаблон("тип проверяемого значения `%1` не обрабатывается утверждением", ТипЗнч(ПроверяемоеЗначение));
		ЮТРегистрацияОшибок.ДобавитьОшибкуКРезультатуПроверки(РезультатПроверки, ТекстОшибки, ПараметрыПроверки);
		Возврат;
	КонецЕсли;
	
	Результат = ФактическаяДлина = ПараметрыПроверки.ОжидаемоеЗначение;
	
	Если ПараметрыПроверки.Реверс Тогда
		Результат = НЕ Результат;
	КонецЕсли;
	
	ОбработатьРезультатСравнения(Результат, РезультатПроверки, ПараметрыПроверки, ФактическаяДлина);
	
КонецПроцедуры

Функция ПроверитьСодержит(РезультатПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки)
	
	Результат = НайтиЗначение(ПроверяемоеЗначение, ОжидаемоеЗначение);
	
	Если Результат = Неопределено Тогда
		ТекстОшибки = СтрШаблон("тип проверяемого значения `%1` не обрабатывается утверждением", ТипЗнч(ПроверяемоеЗначение));
		ЮТРегистрацияОшибок.ДобавитьОшибкуКРезультатуПроверки(РезультатПроверки, ТекстОшибки, ПараметрыПроверки);
	КонецЕсли;
	
	Возврат Результат;
	
КонецФункции

Функция ПроверитьСоответствуетШаблону(РезультатПроверки, ПроверяемоеЗначение, ОжидаемоеЗначение, ПараметрыПроверки)
	
	ТипыПараметровСоответствуют = ПроверитьТипЗначения(РезультатПроверки, ОжидаемоеЗначение, "Строка")
		И ПроверитьТипЗначения(РезультатПроверки, ПроверяемоеЗначение, "Строка, ФорматированнаяСтрока", "проверяемого значения");
	
	Если Не ТипыПараметровСоответствуют Тогда
		Возврат Неопределено;
	КонецЕсли;
	
	СоответствуетШаблону = СоответствуетШаблону(ПроверяемоеЗначение, ОжидаемоеЗначение);
	
	Если СоответствуетШаблону = Неопределено Тогда
		ТекстОшибки = СтрШаблон("тип проверяемого значения `%1` не обрабатывается утверждением", ТипЗнч(ПроверяемоеЗначение));
		ЮТРегистрацияОшибок.ДобавитьОшибкуКРезультатуПроверки(РезультатПроверки, ТекстОшибки, ПараметрыПроверки);
	КонецЕсли;
	
	Возврат СоответствуетШаблону;
	
КонецФункции

#КонецОбласти

#КонецОбласти
