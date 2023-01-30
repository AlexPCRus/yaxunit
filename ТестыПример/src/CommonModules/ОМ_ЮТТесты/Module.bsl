//©///////////////////////////////////////////////////////////////////////////©//
//
//  Copyright 2021-2022 BIA-Technologies Limited Liability Company
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

/////////////////////////////////////////////////////////////////////////////////
// Экспортные процедуры и функции, предназначенные для использования другими 
// объектами конфигурации или другими программами
///////////////////////////////////////////////////////////////////////////////// 
#Область СлужебныйПрограммныйИнтерфейс

Процедура ИсполняемыеСценарии(ДополнительныеПараметры = Неопределено) Экспорт
	
	ЮТТесты
		.ДобавитьТест("СПараметрами")
	;
	
КонецПроцедуры

Процедура ПередКаждымТестом() Экспорт
	
	ОписаниеМодуля = ЮТФабрика.ОписаниеМодуля();
	ЮТТесты.ПередЧтениемСценариевМодуля(ОписаниеМодуля);
	
КонецПроцедуры

Процедура СПараметрами() Экспорт
	
	ЮТТесты
		.ДобавитьТест("Тест1")
		.ДобавитьТест("Тест2").СПараметрами(1, 2, 3)
		.ДобавитьТест("Тест3")
			.СПараметрами(1)
			.СПараметрами(2)
			.СПараметрами(3)
	;
	
	ЮТест.ОжидаетЧто(Контекст().ТекущийНабор.Тесты)
		.ИмеетДлину(5)
		.Свойство("[0].Параметры").ЭтоНеопределено()
		.Свойство("[1].Параметры").ИмеетДлину(3)
			.Свойство("[1].Параметры[0]").Равно(1)
			.Свойство("[1].Параметры[1]").Равно(2)
			.Свойство("[1].Параметры[2]").Равно(3)
		.Свойство("[2].Параметры").ИмеетДлину(1)
		.Свойство("[3].Параметры[0]").Равно(2)
		.Свойство("[4].Параметры[0]").Равно(3)
	;
	
КонецПроцедуры

#КонецОбласти

#Область СлужебныеПроцедурыИФункции

Функция Контекст()
	
	Возврат ЮТКонтекст.ЗначениеКонтекста("КонтекстРегистрацияТестов");
	
КонецФункции

#КонецОбласти
