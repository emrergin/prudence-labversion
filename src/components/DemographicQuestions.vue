<template>
<div class="flex">
    <div class="sol">
        <div >
            <label for="yas" class="label">Yaşınız: </label>
            <input type="number"
            size="3" maxlength="3"
            min="0" max="200"
            id="yas"
            />
                <label for="ortalama" class="label">Üniversite genel ortalamanız hangi aralıkta? </label>
            <select name="ortalama" id="ortalama">
                <option value="0">0-0.5</option>
                <option value="0.5">0.5-1</option>
                <option value="1">1-1.5</option>
                <option value="1.5">1.5-2</option>
                <option value="2">2-2.5</option>
                <option value="2.5">2.5-3</option>
                <option value="3">3-3.5</option>
                <option value="3.5">3.5-4</option>
            </select>
        </div>
        <div>
            <p class="label">Daha önce benzer bir deneye katıldınız mı?</p>

            <input type="radio" id="html" name="fav_language" value="evet">
            <label for="html">Evet</label>
            <input type="radio" id="css" name="fav_language" value="hayır">
            <label for="css">Hayır</label>
        </div>
        <div >
            <p class="label">Cinsiyetiniz</p>
            <input type="radio" id="kadin" name="cins" value="kadin">
            <label for="kadin">Kadın</label>
            <input type="radio" id="erkek" name="cins" value="erkek">
            <label for="erkek">Erkek</label>
            <input type="radio" id="diger" name="cins" value="diger">
            <label for="diger">Diğer</label> 
        </div>
        <div >
            <label for="bolum" class="label">Bölümünüz: </label> 
            <input id="bolum"/>
        </div>
        <div >
            <label for="ders" class="label">Bugüne kadar kaç ekonomi dersi aldınız?</label>

            <select name="ders" id="ders">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
            </select>
        </div>
    </div>
    <div class="sag">
        <label class="label">Deneydeki işlerin ne kadar zor olduğunu düşündünüz?</label>
        <ul class='likert'>
            <li>
                <input type="radio" name="zorluk" value="0">
                <label>Çok zor</label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="1">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="2">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="3">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="4">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="5">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="6">
                <label></label>
            </li>
                <li>
                <input type="radio" name="zorluk" value="7">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="8">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="9">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="10">
                <label>Çok kolay</label>
            </li>
        </ul>
        <label class="statement">Deneydeki seçimleriniz hakkında ne kadar emindiniz?</label>
        <ul class='likert'>
            <li>
                <input type="radio" name="secimler" value="0">
                <label>Hiç emin değildim</label>
            </li>
            <li>
                <input type="radio" name="secimler" value="1">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="2">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="3">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="4">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="5">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="6">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="7">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="8">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="9">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="10">
                <label>Çok emindim</label>
            </li>
        </ul>
        <div>
            <button @click="$emit('end', true)" class="stepButton">
                <span>Verileri Kaydet</span>
            </button>
        </div>

        </div>


    </div>
</template>

<style scoped>
div{
    font-size:14px;
}

/* *{
    outline: 2px solid red;
} */
.flex{
    display:flex;
}
.sol{
    text-align: left;
    padding-left:50px;
}

.sag{
    flex-grow:999;
    margin-block:auto;
}
.statement {
  display:block;
  font-size: 14px;
  font-weight: bold;
  padding: 30px 0 0 4.25%;
  margin-bottom:10px;
}

.label{
    display:block;
    font-size: 14px;
    font-weight: bold;
    padding: 18px 0 0 0;
    margin-bottom:10px; 
}
.likert {
  list-style:none;
  width:100%;
  margin:0;
  padding:0 0 35px;
  display:block;
  border-bottom:2px solid #efefef;
}
.likert:last-of-type {border-bottom:0;}
.likert:before {
  content: '';
  position:relative;
  top:11px;
  left:9.5%;
  display:block;
  background-color:#efefef;
  height:4px;
  width:80%;
}
.likert li {
  display:inline-block;
  width:8%;
  text-align:center;
  vertical-align: top;
}
.likert li input[type=radio] {
  display:block;
  position:relative;
  top:0;
  left:50%;
  margin-left:-6px;
  
}
form .likert li label {width:100%;}
</style>