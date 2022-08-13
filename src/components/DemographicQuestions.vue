<template>
<div class="flex m-bot">
    <div class="sol">
        <div >
            <label for="yas" class="label">Yaşınız: </label>
            <input type="number"
            size="3" maxlength="3"
            min="0" max="200"
            id="yas"
            v-model="age"
            />
            <label for="ortalama" class="label">Üniversite genel ortalamanız hangi aralıkta? </label>
            <select name="ortalama" id="ortalama" v-model="gpa">
                <option disabled selected value="" hidden> seçiniz </option>
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

            <input type="radio" id="html" name="fav_language" value="1" v-model="preExp">
            <label for="html">Evet</label>
            <input type="radio" id="css" name="fav_language" value="0"  v-model="preExp">
            <label for="css">Hayır</label>
        </div>
        <div >
            <p class="label">Cinsiyetiniz</p>
            <input type="radio" id="kadin" name="cins" value="0" v-model="sex">
            <label for="kadin">Kadın</label>
            <input type="radio" id="erkek" name="cins" value="1" v-model="sex">
            <label for="erkek">Erkek</label>
            <input type="radio" id="diger" name="cins" value="2" v-model="sex">
            <label for="diger">Diğer</label> 
        </div>
        <div >
            <label for="bolum" class="label">Bölümünüz: </label> 
            <input id="bolum" v-model="dep"/>
        </div>
        <div >
            <label for="ders" class="label">Bugüne kadar kaç ekonomi dersi aldınız?</label>

            <select name="ders" id="ders" v-model="econ">
                <option disabled selected value="" hidden> seçiniz </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
            </select>
        </div>
    </div>
    <div class="sag">
        <label class="label">Deneydeki işlerin ne kadar zor olduğunu düşündünüz?</label>
        <ul class='likert'>
            <li>
                <input type="radio" name="zorluk" value="0" v-model="diff">
                <label>Çok kolay</label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="1" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="2" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="3" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="4" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="5" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="6" v-model="diff">
                <label></label>
            </li>
                <li>
                <input type="radio" name="zorluk" value="7" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="8" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="9" v-model="diff">
                <label></label>
            </li>
            <li>
                <input type="radio" name="zorluk" value="10" v-model="diff">
                <label>Çok zor</label>
            </li>
        </ul>
        <label class="statement">Deneydeki seçimleriniz hakkında ne kadar emindiniz?</label>
        <ul class='likert'>
            <li>
                <input type="radio" name="secimler" value="0" v-model="sure">
                <label>Hiç emin değildim</label>
            </li>
            <li>
                <input type="radio" name="secimler" value="1" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="2" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="3" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="4" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="5" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="6" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="7" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="8" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="9" v-model="sure">
                <label></label>
            </li>
            <li>
                <input type="radio" name="secimler" value="10" v-model="sure">
                <label>Çok emindim</label>
            </li>
        </ul>
        <!-- <p>{{age}}-{{gpa}}-{{preExp}}-{{sex}}-{{dep}}-{{econ}}-{{diff}}-{{sure}}</p> -->
        <div>
            <button type="button" @click="finishPart" class="stepButton"
            :disabled="age === '' || gpa === '' || preExp=== '' || sex === '' || econ==='' || diff==='' || sure === ''" 
            >
                <span>Devam</span>
            </button>
        </div>

        </div>


</div>
</template>


<script setup>
import { defineEmits as defineEmits } from "@vue/runtime-dom";
import {checkValidityOfAllInputs} from '../functions/utilities'
import { ref } from "vue";
import { store } from "../store.js";
import veriGuncelle from "../functions/veriGuncelle";

const emit = defineEmits(["end"]);
const age=ref('');
const gpa=ref('');
const preExp=ref('');
const sex=ref('');
const dep=ref('');
const econ=ref('');
const diff=ref('');
const sure=ref('');

function finishPart(){
    if (!checkValidityOfAllInputs()){return;}
    store.demografi = {age:age.value,gpa:gpa.value,preExp:preExp.value,sex:sex.value,dep:dep.value,econ:econ.value,diff:diff.value,sure:sure.value};
    // console.log(store.demografi);
    veriGuncelle();
    emit('end', true);
}
</script>


<style scoped>
div{
    font-size:14px;
}

.flex{
    display:flex;
}

/* .vertical-centering{
    margin-block:10%;
} */

/* *{
    outline: 2px solid red;
} */

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