#Область ОбработчикиСобытий

Процедура ПередЗаписью(Отказ, Замещение)
	
	Если ОбменДанными.Загрузка Тогда
		Возврат;
	КонецЕсли;
	
	РегистрыСведений.ЦеныТоваров.ЗаполненоКорректно(ЭтотОбъект);
	
КонецПроцедуры

Процедура ОбработкаПроверкиЗаполнения(Отказ, ПроверяемыеРеквизиты)
	
	РегистрыСведений.ЦеныТоваров.ЗаполненоКорректно(ЭтотОбъект);
	
КонецПроцедуры

#КонецОбласти
