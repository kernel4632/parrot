function 生成色卡 (基础色, 数量) {
  let root = document.querySelector(':root')
  let 初始R = parseInt(基础色.substring(1, 3), 16)
  let 初始G = parseInt(基础色.substring(3, 5), 16)
  let 初始B = parseInt(基础色.substring(5, 7), 16)
  for (let i = 0; i < 数量; i++) {
    let 比例 = i / (数量 - 1)
    let r = parseInt((1 - 比例) * 初始R + 比例 * 255)
    let g = parseInt((1 - 比例) * 初始G + 比例 * 255)
    let b = parseInt((1 - 比例) * 初始B + 比例 * 255)
    root.style.setProperty(`--主题色${i + 1}`, `rgb(${r},${g},${b})`)
  }
}

生成色卡('#5E72E4', 10)

function 输入框自适应高度 (最大高度) {
  let 输入框 = document.getElementById('输入框')
  输入框.addEventListener('input', () => {
    输入框.style.height =
      Math.min(输入框.value.split('\n').length * 25+13, 最大高度) + 'px'
  })
}
输入框自适应高度(300)




var md = window.markdownit();
function markdown(text) {
    return md.render(text);
}