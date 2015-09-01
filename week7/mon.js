/////forms
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input
// http://diveintohtml5.info/forms.html

<form action="/my-handling-form-page" method="post">

</form>
//////
<form action="/my-handling-form-page" method="post">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="user_name" />
    </div>
    <div>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" name="user_email" />
    </div>
    <div>
        <label for="msg">Message:</label>
        <textarea id="msg" name="user_message"></textarea>
    </div>
    
    <div class="button">
        <button type="submit">Send your message</button>
    </div>
</form>
/////
<form action="" method="get">
    <div>
      <label for="name">Name:</label>
      <input type='text', autofocus='email', placeholder='name goes here'/>
    </div>
    <div> 
      <textarea>pre-filled text</textarea>
    </div>
    <div>
      <label for="msg">Message:</label>
      <textarea></textarea>
    </div>
    <div>
      <label for="mail">E-mail:</label>
      <input id='user_email', type='email', for='email'/>
    </div>
    <div>
      <input id='user_date', type='date', for'date'/>
    </div>
    <div>
      <input id='user_number', type='number', for='number'/>
    </div>
    <div>
      <input id='user_file', type='file', for='file'/>
    </div>
    <div>
      <div class="button">
      <button type='submit'>send it</button>
    </div>
</form>
///////
///////////fieldsets
<form>
  <fieldset>
      <legend>Friendship</legend>
      <input type="radio" name="radFriendship" value="Not_Applicable"
          id="radFriendNot_Applicable"/>
      <label for="radFriendNot_Applicable">Not_Applicable</label>
      <input type="radio" name="radFriendship" value="acquaintance"
          id="radFriendaquaintence"/>
      <label for="radFriendaquaintence">acquaintance</label>
      <input type="radio" name="radFriendship" value="friend"
          id="radFriendfriend"/>
     <label for="radFriendfriend">friend</label>
  </fieldset>
⋮
</form>

http://wenzhixin.net.cn/p/multiple-select/docs/