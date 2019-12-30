2019.12.27 
# kbro meet note
----  
## kbro meet - ckmates & 台哥大 & 志宏資訊 

>  A1_BOX -> 推薦節目，隨選即播，但至少不要出現過期的節目 <br>
> 預計 A1_BOX 每10分鐘 call API 一次，取得推薦節目 <br>
> 目前 即時播放 每10分鐘 call api ，為了即時播放的節目，不願意 lose 即時播放的節目 <br>
> 目前 call 每個人的專屬推薦 API(開機得時候 一天一次) / 相關節目推薦 API(每按遙控器右鍵 及 10分鐘一次) <br>
> item to item 做推薦，不以人做推薦 <br> 

> 專屬推薦 固定152頻道左右  6個種類 <br>

----
## 目前討論方案

### 方案 A
> 請統一資訊開地端 API SERVER 呼叫 API Gateway -> lambda -> dynamodb  

### 方案 B
> 直接透過地端server 去抓 S3 的資料，由 kbro 來過濾資料給使用者

### 方案 C
> kbro 希望由我們這邊 lambda 處理完資料，他們再抓 17萬筆各個使用者的資料
----

## 未來評估
### kbro 明年估計有70萬台機上盒

### 方案 A
> 機器由 kbro 出 API SERVER ，由我們開發

### 方案 B
> 開一台 EC2 運算資料  


