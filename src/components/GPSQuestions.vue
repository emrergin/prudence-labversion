<template>
<div v-if="question==='generalrisk'">
    <h4>Genel olarak, risk almaya istekli bir kişi mi yoksa risk almaktan sakınan biri misiniz?</h4>        
    <p class="m-bot"> Lütfen cevabınızı 0'dan 10'a kadar bir ölçekte belirtin. Burada 0, "risk almaya tamamen
        isteksiz" ve 10, "risk almaya çok istekli" anlamına gelir. Ölçekte nereye düştüğünüzü
        belirtmek için 0 ile 10 arasında herhangi bir sayı kullanabilirsiniz.
    </p>
    <ul class='likert'>
        <li>
            <input id="ri0" type="radio" name="risk_istegi" value="0" required>
            <label for="ri0">0 - Risk almaya tamamen isteksiz</label>
        </li>
        <li>
            <input id="ri1" type="radio" name="risk_istegi" value="1">
            <label for="ri1">1</label>
        </li>
        <li>
            <input id="ri2" type="radio" name="risk_istegi" value="2">
            <label for="ri2">2</label>
        </li>
        <li>
            <input id="ri3" type="radio" name="risk_istegi" value="3">
            <label for="ri3">3</label>
        </li>
        <li>
            <input id="ri4" type="radio" name="risk_istegi" value="4">
            <label for="ri4">4</label>
        </li>
        <li>
            <input id="ri5" type="radio" name="risk_istegi" value="5">
            <label for="ri5">5</label>
        </li>
        <li>
            <input id="ri6" type="radio" name="risk_istegi" value="6">
            <label for="ri6">6</label>
        </li>
            <li>
            <input id="ri7" type="radio" name="risk_istegi" value="7">
            <label for="ri7">7</label>
        </li>
        <li>
            <input id="ri8" type="radio" name="risk_istegi" value="8">
            <label for="ri8">8</label>
        </li>
        <li>
            <input id="ri9" type="radio" name="risk_istegi" value="9">
            <label for="ri9">9</label>
        </li>
        <li>
            <input id="ri10" type="radio" name="risk_istegi" value="10">
            <label for="ri10">10 - Risk almaya çok istekli</label>
        </li>
    </ul>
</div>
<div v-if="question==='willingnesstoact'">
    <div>
        <p> Şimdi size belirli bir şekilde hareket etmeye istekli olup olmadığınızı soruyoruz.</p>
        <p> 
            Lütfen cevabınızı 0'dan 10'a kadar bir ölçekte tekrar belirtin. 0, “hiçbir şekilde yapmak istemiyor” 
            ve 10, “yapmaya çok istekli” anlamına gelir. Ölçekte nereye düştüğünüzü
            belirtmek için 0 ile 10 arasında herhangi bir sayı kullanabilirsiniz.
        </p>
    </div>
        <label class="statement">Gelecekte daha fazla faydasını görebilmek adına bugün sizin için faydalı olan bir şeyden vazgeçmeye ne kadar isteklisiniz?</label>
        <ul class='likert'>
            <li>
                <input id="gf0" type="radio" name="gelecekfayda" value="0" required>
                <label for="gf0">0 - Hiçbir şekilde yapmak istemiyor</label>
            </li>
            <li>
                <input id="gf1" type="radio" name="gelecekfayda" value="1">
                <label for="gf1">1</label>
            </li>
            <li>
                <input id="gf2" type="radio" name="gelecekfayda" value="2">
                <label for="gf2">2</label>
            </li>
            <li>
                <input id="gf3" type="radio" name="gelecekfayda" value="3">
                <label for="gf3">3</label>
            </li>
            <li>
                <input id="gf4" type="radio" name="gelecekfayda" value="4">
                <label for="gf4">4</label>
            </li>
            <li>
                <input id="gf5" type="radio" name="gelecekfayda" value="5">
                <label for="gf5">5</label>
            </li>
            <li>
                <input id="gf6" type="radio" name="gelecekfayda" value="6">
                <label for="gf6">6</label>
            </li>
            <li>
                <input id="gf7" type="radio" name="gelecekfayda" value="7">
                <label for="gf7">7</label>
            </li>
            <li>
                <input id="gf8" type="radio" name="gelecekfayda" value="8">
                <label for="gf8">8</label>
            </li>
            <li>
                <input id="gf9" type="radio" name="gelecekfayda" value="9">
                <label for="gf9">9</label>
            </li>
            <li>
                <input id="gf10" type="radio" name="gelecekfayda" value="10">
                <label for="gf10">10 - Bunu yapmaya çok istekli</label>
            </li>
        </ul>
        <label class="statement">Size maliyetleri olsa bile, size karşı haksız davranışları cezalandırmaya ne kadar isteklisiniz?</label>
        <ul class='likert'>
            <li>
                <input id="ck0" type="radio" name="cezakendi" value="0" required>
                <label for="ck0">0 - Hiçbir şekilde yapmak istemiyor</label>
            </li>
            <li>
                <input id="ck1" type="radio" name="cezakendi" value="1">
                <label for="ck1">1</label>
            </li>
            <li>
                <input id="ck2" type="radio" name="cezakendi" value="2">
                <label for="ck2">2</label>
            </li>
            <li>
                <input id="ck3" type="radio" name="cezakendi" value="3">
                <label for="ck3">3</label>
            </li>
            <li>
                <input id="ck4" type="radio" name="cezakendi" value="4">
                <label for="ck4">4</label>
            </li>
            <li>
                <input id="ck5" type="radio" name="cezakendi" value="5">
                <label for="ck5">5</label>
            </li>
            <li>
                <input id="ck6" type="radio" name="cezakendi" value="6">
                <label for="ck6">6</label>
            </li>
            <li>
                <input id="ck7" type="radio" name="cezakendi" value="7">
                <label for="ck7">7</label>
            </li>
            <li>
                <input id="ck8" type="radio" name="cezakendi" value="8">
                <label for="ck8">8</label>
            </li>
            <li>
                <input id="ck9" type="radio" name="cezakendi" value="9">
                <label for="ck9">9</label>
            </li>
            <li>
                <input id="ck10" type="radio" name="cezakendi" value="10">
                <label for="ck10">10 - Bunu yapmaya çok istekli</label>
            </li>
        </ul>
        <label class="statement">Size maliyetleri olsa bile, başkalarına haksızlık yapan birini cezalandırmaya ne kadar isteklisiniz?</label>
        <ul class='likert'>
            <li>
                <input id="cb0" type="radio" name="cezabaskasi" value="0" required>
                <label for="cb0">0 - Hiçbir şekilde yapmak istemiyor</label>
            </li>
            <li>
                <input id="cb1" type="radio" name="cezabaskasi" value="1">
                <label for="cb1">1</label>
            </li>
            <li>
                <input id="cb2" type="radio" name="cezabaskasi" value="2">
                <label for="cb2">2</label>
            </li>
            <li>
                <input id="cb3" type="radio" name="cezabaskasi" value="3">
                <label for="cb3">3</label>
            </li>
            <li>
                <input id="cb4" type="radio" name="cezabaskasi" value="4">
                <label for="cb4">4</label>
            </li>
            <li>
                <input id="cb5" type="radio" name="cezabaskasi" value="5">
                <label for="cb5">5</label>
            </li>
            <li>
                <input id="cb6" type="radio" name="cezabaskasi" value="6">
                <label for="cb6">6</label>
            </li>
            <li>
                <input id="cb7" type="radio" name="cezabaskasi" value="7">
                <label for="cb7">7</label>
            </li>
            <li>
                <input id="cb8" type="radio" name="cezabaskasi" value="8">
                <label for="cb8">8</label>
            </li>
            <li>
                <input id="cb9" type="radio" name="cezabaskasi" value="9">
                <label for="cb9">9</label>
            </li>
            <li>
                <input id="cb10" type="radio" name="cezabaskasi" value="10">
                <label for="cb10">10 - Bunu yapmaya çok istekli</label>
            </li>
        </ul>
        <label class="statement">Karşılığında hiçbir geri dönüş beklemeden hayır işlerine bir şeyler vermeye ne kadar isteklisiniz?</label>
        <ul class='likert'>
            <li>
                <input id="hi0" type="radio" name="hayir" value="0" required>
                <label for="hi0">0 - Hiçbir şekilde yapmak istemiyor</label>
            </li>
            <li>
                <input id="hi1" type="radio" name="hayir" value="1">
                <label for="hi1">1</label>
            </li>
            <li>
                <input id="hi2" type="radio" name="hayir" value="2">
                <label for="hi2">2</label>
            </li>
            <li>
                <input id="hi3" type="radio" name="hayir" value="3">
                <label for="hi3">3</label>
            </li>
            <li>
                <input id="hi4" type="radio" name="hayir" value="4">
                <label for="hi4">4</label>
            </li>
            <li>
                <input id="hi5" type="radio" name="hayir" value="5">
                <label for="hi5">5</label>
            </li>
            <li>
                <input id="hi6" type="radio" name="hayir" value="6">
                <label for="hi6">6</label>
            </li>
            <li>
                <input id="hi7" type="radio" name="hayir" value="7">
                <label for="hi7">7</label>
            </li>
            <li>
                <input id="hi8" type="radio" name="hayir" value="8">
                <label for="hi8">8</label>
            </li>
            <li>
                <input id="hi9" type="radio" name="hayir" value="9">
                <label for="hi9">9</label>
            </li>
            <li>
                <input id="hi10" type="radio" name="hayir" value="10">
                <label for="hi10">10 - Bunu yapmaya çok istekli</label>
            </li>
        </ul>
</div>
<div v-if="question==='describe'" class="minusmargin">
    <div >
        <p>Aşağıdaki ifadelerden her biri sizi ne kadar iyi tanımlar?</p>
        <p>Lütfen cevabınızı 0&#39;dan 10&#39;a kadar bir ölçekte belirtin. 0 “beni hiç ifade etmiyor” ve 10 “beni
            mükemmel şekilde ifade ediyor” anlamına gelir. Ölçekte nereye düştüğünüzü belirtmek için 0
            ile 10 arasında herhangi bir sayı kullanabilirsiniz.
        </p>
        <label class="statement smalltoppadding">Bana iyilikte bulunan birisine karşılık vermeye hazırım.</label>
        <ul class='likert'>
            <li>
                <input id="de1_0" type="radio" name="d1" value="0" required>
                <label for="de1_0">0 - Beni hiç ifade etmiyor</label>
            </li>
            <li>
                <input id="de1_1" type="radio" name="d1" value="1">
                <label for="de1_1">1</label>
            </li>
            <li>
                <input id="de1_2" type="radio" name="d1" value="2">
                <label for="de1_2">2</label>
            </li>
            <li>
                <input id="de1_3" type="radio" name="d1" value="3">
                <label for="de1_3">3</label>
            </li>
            <li>
                <input id="de1_4" type="radio" name="d1" value="4">
                <label for="de1_4">4</label>
            </li>
            <li>
                <input id="de1_5" type="radio" name="d1" value="5">
                <label for="de1_5">5</label>
            </li>
            <li>
                <input id="de1_6" type="radio" name="d1" value="6">
                <label for="de1_6">6</label>
            </li>
            <li>
                <input id="de1_7" type="radio" name="d1" value="7">
                <label for="de1_7">7</label>
            </li>
            <li>
                <input id="de1_8" type="radio" name="d1" value="8">
                <label for="de1_8">8</label>
            </li>
            <li>
                <input id="de1_9" type="radio" name="d1" value="9">
                <label for="de1_9">9</label>
            </li>
            <li>
                <input id="de1_10" type="radio" name="d1" value="10">
                <label for="de1_10">10 - Beni mükemmel şekilde ifade ediyor</label>
            </li>
        </ul>
        <label class="statement smalltoppadding">Eğer çok haksız bir muamele görürsem, bunu yapmak için bir bedel olsa bile ilk fırsatta bunun intikamını alırım.</label>
        <ul class='likert'>
            <li>
                <input id="de2_0" type="radio" name="d2" value="0" required>
                <label for="de2_0">0 - Beni hiç ifade etmiyor</label>
            </li>
            <li>
                <input id="de2_1" type="radio" name="d2" value="1">
                <label for="de2_1">1</label>
            </li>
            <li>
                <input id="de2_2" type="radio" name="d2" value="2">
                <label for="de2_2">2</label>
            </li>
            <li>
                <input id="de2_3" type="radio" name="d2" value="3">
                <label for="de2_3">3</label>
            </li>
            <li>
                <input id="de2_4" type="radio" name="d2" value="4">
                <label for="de2_4">4</label>
            </li>
            <li>
                <input id="de2_5" type="radio" name="d2" value="5">
                <label for="de2_5">5</label>
            </li>
            <li>
                <input id="de2_6" type="radio" name="d2" value="6">
                <label for="de2_6">6</label>
            </li>
            <li>
                <input id="de2_7" type="radio" name="d2" value="7">
                <label for="de2_7">7</label>
            </li>
            <li>
                <input id="de2_8" type="radio" name="d2" value="8">
                <label for="de2_8">8</label>
            </li>
            <li>
                <input id="de2_9" type="radio" name="d2" value="9">
                <label for="de2_9">9</label>
            </li>
            <li>
                <input id="de2_10" type="radio" name="d2" value="10">
                <label for="de2_10">10 - Beni mükemmel şekilde ifade ediyor</label>
            </li>
        </ul>
        <label class="statement smalltoppadding">Ben insanların sadece en iyi niyetlerle davrandıklarını varsayarım.</label>
        <ul class='likert'>
            <li>
                <input id="de3_0" type="radio" name="d3" value="0" required>
                <label for="de3_0">0 - Beni hiç ifade etmiyor</label>
            </li>
            <li>
                <input id="de3_1" type="radio" name="d3" value="1">
                <label for="de3_1">1</label>
            </li>
            <li>
                <input id="de3_2" type="radio" name="d3" value="2">
                <label for="de3_2">2</label>
            </li>
            <li>
                <input id="de3_3" type="radio" name="d3" value="3">
                <label for="de3_3">3</label>
            </li>
            <li>
                <input id="de3_4" type="radio" name="d3" value="4">
                <label for="de3_4">4</label>
            </li>
            <li>
                <input id="de3_5" type="radio" name="d3" value="5">
                <label for="de3_5">5</label>
            </li>
            <li>
                <input id="de3_6" type="radio" name="d3" value="6">
                <label for="de3_6">6</label>
            </li>
            <li>
                <input id="de3_7" type="radio" name="d3" value="7">
                <label for="de3_7">7</label>
            </li>
            <li>
                <input id="de3_8" type="radio" name="d3" value="8">
                <label for="de3_8">8</label>
            </li>
            <li>
                <input id="de3_9" type="radio" name="d3" value="9">
                <label for="de3_9">9</label>
            </li>
            <li>
                <input id="de3_10" type="radio" name="d3" value="10">
                <label for="de3_10">10 - Beni mükemmel şekilde ifade ediyor</label>
            </li>
        </ul>
        <label class="statement smalltoppadding">Matematikte iyiyim.</label>
        <ul class='likert'>
            <li>
                <input id="de4_0" type="radio" name="d4" value="0" required>
                <label for="de4_0">0 - Beni hiç ifade etmiyor</label>
            </li>
            <li>
                <input id="de4_1" type="radio" name="d4" value="1">
                <label for="de4_1">1</label>
            </li>
            <li>
                <input id="de4_2" type="radio" name="d4" value="2">
                <label for="de4_2">2</label>
            </li>
            <li>
                <input id="de4_3" type="radio" name="d4" value="3">
                <label for="de4_3">3</label>
            </li>
            <li>
                <input id="de4_4" type="radio" name="d4" value="4">
                <label for="de4_4">4</label>
            </li>
            <li>
                <input id="de4_5" type="radio" name="d4" value="5">
                <label for="de4_5">5</label>
            </li>
            <li>
                <input id="de4_6" type="radio" name="d4" value="6">
                <label for="de4_6">6</label>
            </li>
            <li>
                <input id="de4_7" type="radio" name="d4" value="7">
                <label for="de4_7">7</label>
            </li>
            <li>
                <input id="de4_8" type="radio" name="d4" value="8">
                <label for="de4_8">8</label>
            </li>
            <li>
                <input id="de4_9" type="radio" name="d4" value="9">
                <label for="de4_9">9</label>
            </li>
            <li>
                <input id="de4_10" type="radio" name="d4" value="10">
                <label for="de4_10">10 - Beni mükemmel şekilde ifade ediyor</label>
            </li>
        </ul>
        <label class="statement smalltoppadding">Görevleri hemen yapmanın daha iyi olacağını bilsem bile erteleme eğilimindeyim.</label>
        <ul class='likert'>
            <li>
                <input id="de5_0" type="radio" name="d5" value="0" required>
                <label for="de5_0">0 - Beni hiç ifade etmiyor</label>
            </li>
            <li>
                <input id="de5_1" type="radio" name="d5" value="1">
                <label for="de5_1">1</label>
            </li>
            <li>
                <input id="de5_2" type="radio" name="d5" value="2">
                <label for="de5_2">2</label>
            </li>
            <li>
                <input id="de5_3" type="radio" name="d5" value="3">
                <label for="de5_3">3</label>
            </li>
            <li>
                <input id="de5_4" type="radio" name="d5" value="4">
                <label for="de5_4">4</label>
            </li>
            <li>
                <input id="de5_5" type="radio" name="d5" value="5">
                <label for="de5_5">5</label>
            </li>
            <li>
                <input id="de5_6" type="radio" name="d5" value="6">
                <label for="de5_6">6</label>
            </li>
            <li>
                <input id="de5_7" type="radio" name="d5" value="7">
                <label for="de5_7">7</label>
            </li>
            <li>
                <input id="de5_8" type="radio" name="d5" value="8">
                <label for="de5_8">8</label>
            </li>
            <li>
                <input id="de5_9" type="radio" name="d5" value="9">
                <label for="de5_9">9</label>
            </li>
            <li>
                <input id="de5_10" type="radio" name="d5" value="10">
                <label for="de5_10">10 - Beni mükemmel şekilde ifade ediyor</label>
            </li>
        </ul>
    </div>
</div>
<div v-if="question==='stairrisk'">
    <div class="subdiv">
        <p>Lütfen aşağıdaki durumu hayal edin: </p>
        <p>{{150* inflationMultiplier}} TL kazanma ve hiçbir şey kazanamama arasında eşit şansa sahip olacağınız bir çekiliş yahut belirli bir miktar kesin ödeme arasında seçim yapabilirsiniz. Size böyle beş farklı durum sunacağız.</p> 
    </div>
    <div class="u-bot" >
        <p>Hangisini tercih ederdiniz:</p> 
        <p id="stairStep" class="stair-step">%50 şansla <strong>{{inflationMultiplier * stair1SureOutcome}} TL</strong> para kazandıran ve %50 şansla hiçbir şey kazandırmayan bir çekilişi mi yahut <strong>{{currentSure * inflationMultiplier}} TL</strong>’lik kesin bir nakit para ödemesini mi? </p>
        <input type="radio" id="stairRiskA" name="stairRisk" v-model="currentStairValue" value="1" required>
        <label for="stairRiskA"> 50/50 çekiliş</label>
        <input type="radio" id="stairRiskB" name="stairRisk" v-model="currentStairValue" value="0">
        <label for="stairRiskB"> Kesin ödeme</label>
    </div>
</div>
<div v-if="question==='gift'">
    <div class="subdiv">
        <p>Size aşina olmayan bir bölgede olduğunuzun ve yolunuzu kaybettiğinizin farkındasınız. Tanımadığınız birine yol tarifi soruyorsunuz. Sizi gideceğiniz yere götürmeyi teklif ediyor.</p>

        <p>Size yardım etmek bu yabancıya toplamda {{8*inflationMultiplier}} TL’ye mal olacaktır. Buna rağmen bu yabancı sizden hiç para istememektedir. Yanınızda 6 adet hediye var. En ucuz hediye {{2*inflationMultiplier}} TL, en pahalı olanı ise {{12*inflationMultiplier}} TL değerinde.</p> 

        <p>Bu hediyelerden birini “teşekkür hediyesi” olarak bu yabancıya verir misiniz? </p>
    </div>
    <div >
        <input type="radio" id="gifter" name="gift" value="next" v-model="currentGiftSelection" required>
        <label for="gifter">Evet</label>
        <input type="radio" id="nongifter" name="gift" value="0" v-model="currentGiftSelection">
        <label for="nongifter">Hayır</label>
    </div>
    <div class="subdiv" v-if="currentGiftSelection==='next'">       

        <label class="statement">Yabancıya hangi hediyeyi verirsiniz?</label>
        <ul class='likert sixmemberlikert'>
            <li>
                <input id="g2" type="radio" name="giftvalue" value="2" required>
                <label for="g2">{{2*inflationMultiplier}} TL değerinde hediye</label>
            </li>
            <li>
                <input id="g4" type="radio" name="giftvalue" value="4">
                <label for="g4">{{4*inflationMultiplier}} TL değerinde hediye</label>
            </li>
            <li>
                <input id="g6" type="radio" name="giftvalue" value="6">
                <label for="g6">{{6*inflationMultiplier}} TL değerinde hediye</label>
            </li>
            <li>
                <input id="g8" type="radio" name="giftvalue" value="8">
                <label for="g8">{{8*inflationMultiplier}} TL değerinde hediye</label>
            </li>
            <li>
                <input id="g10" type="radio" name="giftvalue" value="10">
                <label for="g12">{{10*inflationMultiplier}} TL değerinde hediye</label>
            </li>
            <li>
                <input id="g12" type="radio" name="giftvalue" value="12">
                <label for="g12">{{12*inflationMultiplier}} TL değerinde hediye</label>
            </li>
        </ul>
    </div>

</div>
<div v-if="question==='hypodonation'">
    <div class="subdiv">
        <p>Aşağıdaki durumu hayal edin:</p> 
        <p>Bugün beklenmedik bir şekilde {{400*inflationMultiplier}} TL aldınız. İyi bir amaç için bu miktarın ne kadarını bağışlarsınız? (0 ile {{400*inflationMultiplier}} arasındaki herhangi bir değeri seçebilirsiniz)</p>
    </div>
    <br>
    <input type="number" min="0" :max="400*inflationMultiplier" required name="donation"/>
</div>
<div v-if="question==='stairpatience'">
    <div class="subdiv">
        <p>
            Size bugün bir ödeme alma veya 12 ay sonra bir ödeme alma arasında seçim hakkı verildiğini varsayın. Şimdi size beş durum sunacağız. Bugünkü ödeme miktarı, bu beş durumun her birinde aynıdır. 12 ay sonra ödenecek miktar ise her durumda farklıdır. 
        </p>
        <p>
            Bu durumların her biri için hangisini seçeceğinizi bilmek istiyoruz. Enflasyon olmadığını varsayın, yani gelecekteki fiyatlar bugünkü fiyatlar ile aynıdır.
        </p>

    </div>
    <div class="u-bot" >
        <p>Lütfen aşağıdaki durumu değerlendirin:</p> 
        <p id="stairStep" class="stair-step">Bugün <strong>{{40* inflationMultiplier}} TL</strong> almayı mı yoksa 12 ay sonra <strong>{{valueNow* inflationMultiplier}} TL</strong> almayı mı tercih edersiniz?</p>
        <input type="radio" id="stairPatience1" name="stairPatience" v-model="currentStairValue" value="1" required>
        <label for="stairPatience1"> Bugün </label>
        <input type="radio" id="stairPatience2" name="stairPatience" v-model="currentStairValue" value="0">
        <label for="stairPatience2"> 12 ay sonra</label>
    </div>
</div>

<div>
    <button @click="nextQuestion" class="stepButton" id="gpsStep">
        <span v-if="stairPatienceSelections.length<5">Sıradaki Soru</span>
        <span v-else>Deneyi Bitir</span>
    </button>
</div>

</template>


<script setup>
    import { ref } from "vue";
    import { defineEmits as defineEmits } from "@vue/runtime-dom";
    import {checkValidityOfAllInputs} from '../functions/utilities';
    import { store } from "../store.js";
    import updateData from "../functions/updateData";
    const emit = defineEmits(["end"]);

    const questionList= [`generalrisk`,`willingnesstoact`,`describe`,`stairrisk`,`gift`,`hypodonation`,`stairpatience`];
    const question = ref(`generalrisk`);
    // const question = ref(`stairrisk`);

    const questionIndex = ref(0);
    // const questionIndex = ref(3);

    function nextQuestion(){

        if (!checkValidityOfAllInputs()){return;}

        if(questionList[questionIndex.value]===`stairrisk`){
            let nextValue;//For value to be rendered after the animation.
            stairRiskSelections.value.push(currentStairValue.value);
            document.getElementById("gpsStep").disabled = true;
            if(stairRiskSelections.value[stairRiskSelections.value.length-1]==='1'){
                nextValue=currentSure.value+1/(2**stairRiskSelections.value.length)*stair1StartingValue;
            }
            else{
                nextValue=currentSure.value-1/(2**stairRiskSelections.value.length)*stair1StartingValue;
            }
            currentStairValue.value=null;
            
            if(document.getElementById('stairStep')){
                document.getElementById('stairStep').classList.add("faded-out");
                const myTimeout = setTimeout(
                ()=>{
                    document.getElementById('stairStep')?.classList.remove("faded-out");
                    currentSure.value = nextValue;
                    if(document.getElementById("gpsStep")){document.getElementById("gpsStep").disabled = false;}
                }    
                    , 750);
            }
            
            if(stairRiskSelections.value.length<5){
                return false;
            }
            else{
                document.getElementById("gpsStep").disabled = false;
            }          
            
        }
        if(questionList[questionIndex.value]===`stairpatience` ){
            stairPatienceSelections.value.push(currentStairValue.value);  
            document.getElementById("gpsStep").disabled = true;
            let nextValue; //For value to be rendered after the animation.
            if (stairPatienceMap.get(valueNow.value)){
                nextValue = stairPatienceMap.get(valueNow.value)[currentStairValue.value];
            }         
            
            currentStairValue.value=null;

            if(document.getElementById('stairStep')){
                document.getElementById('stairStep').classList.add("faded-out");
                const myTimeout = setTimeout(
                ()=>{
                    document.getElementById('stairStep')?.classList.remove("faded-out");
                    valueNow.value=nextValue;
                    if(document.getElementById("gpsStep")){document.getElementById("gpsStep").disabled = false;}                    
                }    
                    , 750);
            }

            if(stairPatienceSelections.value.length<5){
                return false;
            }
            else{
                document.getElementById("gpsStep").disabled = false;
            }
        }


        if (questionList[questionIndex.value]==='stairrisk'|| questionList[questionIndex.value]==='stairpatience'){
            if (questionList[questionIndex.value]==='stairrisk'){
                // console.log(stairRiskSelections.value);
                store.gps.stairrisk = stairRiskSelections.value.reduce((prev,curr,index)=>prev+curr*(16/(2**index)),1);

                // alert(`stair risk: `+store.gps.stairrisk);
            }
            else{
                // console.log(stairPatienceSelections.value);  
                store.gps.stairpatience = 33-stairPatienceSelections.value.reduce((prev,curr,index)=>prev+curr*(16/(2**index)),1);  
                
                // alert(`stair patience: `+store.gps.stairpatience);
            }
        }
        else if (questionList[questionIndex.value]==='gift'){
            if (currentGiftSelection.value==='next'){
                store.gps.gift = document.querySelector("input[name=giftvalue]:checked").value;
            }
            else{
                store.gps.gift = currentGiftSelection.value;
            }
        }
        else {
            let inputs, index;

            inputs = document.getElementsByTagName('input');
            for (index = 0; index < inputs.length; ++index) {
                if (inputs[index].type==='radio' && inputs[index].checked){
                    
                    store.gps[inputs[index].name] = inputs[index].value;
                }
                if (inputs[index].type==='text'||inputs[index].type==='number'){
                    store.gps[inputs[index].name] = inputs[index].value;
                }
                
            }
        }
        
        questionIndex.value++;

        // console.log(store.gps);
        if(questionIndex.value>=7){
            // store.gps= {};
            updateData();
            emit('end', true);
        }

        question.value=questionList[questionIndex.value];
    }


    const stairRiskSelections = ref([]);
    const stair1StartingValue=80;
    const currentSure=ref(stair1StartingValue);
    const stair1SureOutcome=150;
    const currentStairValue=ref('');
    const inflationMultiplier = 5;
    // const stairRiskIndex = 0;
    const currentGiftSelection=ref('');

    const stairPatienceSelections = ref([]);
    const valueNow=ref(62);
    // const currentStairValueP=ref('');
    const stairPatienceMap = new Map();
    stairPatienceMap.set(62,[50,74]);
    stairPatienceMap.set(50,[45,56]);
    stairPatienceMap.set(74,[68,81]);
    stairPatienceMap.set(45,[42,48]);
    stairPatienceMap.set(56,[53,59]);
    stairPatienceMap.set(68,[65,71]);
    stairPatienceMap.set(81,[77,84]);
    stairPatienceMap.set(42,[41,44]);
    stairPatienceMap.set(48,[46,49]);
    stairPatienceMap.set(53,[52,54]);
    stairPatienceMap.set(59,[57,60]);
    stairPatienceMap.set(65,[63,66]);
    stairPatienceMap.set(71,[69,72]);
    stairPatienceMap.set(77,[76,79]);
    stairPatienceMap.set(84,[82,86]);


</script>
<style>
.m-bot{
    margin-bottom:5ch;
}

.faded-out{
    opacity:0;
    /* transition: all 0.5s ease-in; */
}

.stair-step{
    transition: all 0.5s ease-in;
}

</style>
<style scoped>




div{
    max-width:1200px;
}

.subdiv{
    max-width:1000px;
    margin-inline:auto;
    padding-inline:3ch;
}
.m-top{
    margin-top:5ch;
}

.u-bot{
    border-top:2px solid #efefef;
}

/* *{
    outline: 2px solid red;
} */
/* .flex{
    display:flex;
} */

.statement {
  display:block;
  font-size: 14px;
  font-weight: bold;
  padding: 30px 0 0 4.25%;
  margin-bottom:10px;
}

.statement.smalltoppadding{
    padding-top: 5px;
}

.minusmargin{
    margin-bottom:-40px;
}

.likert {
  list-style:none;
  width:100%;
  margin:0;
  padding:0;
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

.likert.sixmemberlikert:before{
    left: 15%;
    width:70%;
}
.likert li {
  display:inline-block;
  width:8%;
  text-align:center;
  vertical-align: top;
}

.likert.sixmemberlikert li{
    width:14%;
}
.likert li input[type=radio] {
  display:block;
  position:relative;
  top:0;
  left:50%;
  margin-left:-6px;  
  margin-bottom:1ch;
}
.likert li label {
    width:100%;
    /* padding-top:5ch; */
}
</style>