<template>
<div class="flex">
    <div class="sol p-bot">
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

            <input type="radio" id="preExp0" name="preExp" value="1" v-model="preExp">
            <label for="preExp0">Evet</label>
            <input type="radio" id="preExp1" name="preExp" value="0"  v-model="preExp">
            <label for="preExp1">Hayır</label>
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
    <div class="sag p-bot">
        <label class="label">Deneydeki kararların ne kadar zor olduğunu düşündünüz?</label>
        <ul class='likert'>
            <li>
                <input id="zor0" type="radio" name="zorluk" value="0" v-model="diff">
                <label for="zor0">Çok kolay</label>
            </li>
            <li>
                <input id="zor1" type="radio" name="zorluk" value="1" v-model="diff">
                <label for="zor1"></label>
            </li>
            <li>
                <input id="zor2" type="radio" name="zorluk" value="2" v-model="diff">
                <label for="zor2"></label>
            </li>
            <li>
                <input id="zor3" type="radio" name="zorluk" value="3" v-model="diff">
                <label for="zor3"></label>
            </li>
            <li>
                <input id="zor4" type="radio" name="zorluk" value="4" v-model="diff">
                <label for="zor4"></label>
            </li>
            <li>
                <input id="zor5" type="radio" name="zorluk" value="5" v-model="diff">
                <label for="zor5"></label>
            </li>
            <li>
                <input id="zor6" type="radio" name="zorluk" value="6" v-model="diff">
                <label for="zor6"></label>
            </li>
                <li>
                <input id="zor7" type="radio" name="zorluk" value="7" v-model="diff">
                <label for="zor7"></label>
            </li>
            <li>
                <input id="zor8" type="radio" name="zorluk" value="8" v-model="diff">
                <label for="zor8"></label>
            </li>
            <li>
                <input id="zor9" type="radio" name="zorluk" value="9" v-model="diff">
                <label for="zor9"></label>
            </li>
            <li>
                <input id="zor10" type="radio" name="zorluk" value="10" v-model="diff">
                <label for="zor10">Çok zor</label>
            </li>
        </ul>
        <label class="statement">Deneydeki seçimleriniz hakkında ne kadar emindiniz?</label>
        <ul class='likert'>
            <li>
                <input id="em0" type="radio" name="secimler" value="0" v-model="sure">
                <label for="em0">Hiç emin değildim</label>
            </li>
            <li>
                <input id="em1" type="radio" name="secimler" value="1" v-model="sure">
                <label for="em1"></label>
            </li>
            <li>
                <input id="em2" type="radio" name="secimler" value="2" v-model="sure">
                <label for="em2"></label>
            </li>
            <li>
                <input id="em3" type="radio" name="secimler" value="3" v-model="sure">
                <label for="em3"></label>
            </li>
            <li>
                <input id="em4" type="radio" name="secimler" value="4" v-model="sure">
                <label for="em4"></label>
            </li>
            <li>
                <input id="em5" type="radio" name="secimler" value="5" v-model="sure">
                <label for="em5"></label>
            </li>
            <li>
                <input id="em6" type="radio" name="secimler" value="6" v-model="sure">
                <label for="em6"></label>
            </li>
            <li>
                <input id="em7" type="radio" name="secimler" value="7" v-model="sure">
                <label for="em7"></label>
            </li>
            <li>
                <input id="em8" type="radio" name="secimler" value="8" v-model="sure">
                <label for="em8"></label>
            </li>
            <li>
                <input id="em9" type="radio" name="secimler" value="9" v-model="sure">
                <label for="em9"></label>
            </li>
            <li>
                <input id="em10" type="radio" name="secimler" value="10" v-model="sure">
                <label for="em10">Çok emindim</label>
            </li>
        </ul>
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
import updateData from "../functions/updateData";

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
    updateData();
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

.p-bot{
    padding-bottom:5ch;
}
.sol{
    text-align: left;
    padding-inline:25px;
    border-right:2px solid #858f9a;
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