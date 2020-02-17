# JS30 day5 - Flex Panel Gallery 
---

<img src="./JSday_5_home.png" style="max-width:100%"> 

#### day2 的功能做出一個時鐘
#### 這裡要注意的事件有幾項

### 前情提要
> 須補寫一些 CSS 屬性
> 需先了解 flex 架構及應用 


## 學習重點
-----
1. 先了解 Flex 屬性
    - Flex 為 CSS display 的屬性，可參考下列連結
    - <a href="https://github.com/ccforward/cc/issues/60"> Flex-basis & Flex-shrink 解析</a>
    - <a href="https://cythilya.github.io/2017/04/06/flexbox-advance/"> 圖解 Flex 進階屬性</a>

1. 修改原本功能 -> (逐一展開及縮放) => (僅展開一個其餘正常) 

1. 使用原生 Element.classList 來處理 CSS add/remove

-----

```javascript
<script>
  ;(function() {
    const panels = document.querySelector('.panels');
    panels.addEventListener('click',open)
    function open() {
      const el = event.target.parentElement;
      if (el.classList.contains('open')) {
        el.classList.remove('open')
        transition_open(el,'remove')
      } else {
        let panel = Array.from(document.querySelectorAll('.panel'));
        panel.forEach(item => {
          item.classList.remove('open');
          item.classList.remove('open-active');
        })
        el.classList.add('open')
        transition_open(el,'add')
      }
    }
    function transition_open(el,action) {
      setTimeout(()=>{
        action === 'add' ? el.classList.add('open-active') : el.classList.remove('open-active')
      },800)
    } 
})()
</script>
```