
one db per app. 
Collections go by resource (food, meals). Collections could also be nested 
(for example, food could be an array inside of each meal). 
But the simplest to me is: one db per app, one collection per resource.

{
meal_name: text,
meal_item1:{quantity:Number, foodname: text, 
              pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item2:{quantity:Number, foodname: text, 
              pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item3:{quantity:Number, foodname: text, 
              pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item4:{quantity:Number, foodname: text, 
              pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item5:{quantity:Number, foodname: text, 
              pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                pro_percent: Number, fat_percent: Number, cho_percent: Number
            }
}

//keep in mind quantity is changed but only after sending base value from collection
{
meal_name: text,
meal _id:
meal_item1:
  food _id: {quantity:Number, foodname: text, 
                pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                  pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item2:
  food _id: {quantity:Number, foodname: text, 
                pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                  pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item3:
  food _id: {quantity:Number, foodname: text, 
                pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                  pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item4:
  food _id: {quantity:Number, foodname: text, 
                pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                  pro_percent: Number, fat_percent: Number, cho_percent: Number
            },
meal_item5:
  food _id: {quantity:Number, foodname: text, 
                pro_grams: Number, fat_grams: Number, cho_grams: Number, 
                  pro_percent: Number, fat_percent: Number, cho_percent: Number
            }
}

https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API

