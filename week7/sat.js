http://bites.goodeggs.com/posts/export-this/#function
pebble 


If you are building a form and want to fill it out quickly, open your Chrome console. 
 Declare each of your element ids(your ids must match your form ids) to a test example, 
 and then invoke the function to submit. 
 Example for Mail Merger :  
document.getElementById('submit_to').innerHTML = "John Smith '\n' Doug McSecondline"
document.getElementById('submit_subject').innerHTML = 'New subject'
document.getElementById('submit_body').innerHTML = 'Any new message'
document.getElementById('mail_form').submit();
