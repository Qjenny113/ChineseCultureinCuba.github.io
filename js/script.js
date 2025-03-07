// 获取音符图标元素
const musicControl = document.getElementById('musicControl');
// 创建一个新的 Audio 对象，用于播放音乐
const audio = new Audio('bgm/华风古巴韵-2.mp3');
// 用于标记音乐是否正在播放
let isPlaying = false;
// 用于标记是否已经进行过用户交互
let hasUserInteracted = false;

// 检测用户的首次交互
function handleUserInteraction() {
    if (!hasUserInteracted) {
        audio.play().catch(error => {
            console.error('播放音乐时出错:', error);
        });
        // 添加 active 类，改变图标颜色
        musicControl.classList.add('active');
        // 设置音乐循环播放
        audio.loop = true;
        isPlaying = true;
        hasUserInteracted = true;
    }
}

// 监听页面的点击事件
document.addEventListener('click', handleUserInteraction, { once: true });

// 给音符图标添加点击事件监听器
musicControl.addEventListener('click', function () {
    if (isPlaying) {
        // 如果音乐正在播放，则暂停音乐
        audio.pause();
        // 移除 active 类，恢复图标原始颜色
        this.classList.remove('active');
    } else {
        // 如果音乐没有播放，则播放音乐
        audio.play().catch(error => {
            console.error('播放音乐时出错:', error);
        });
        // 添加 active 类，改变图标颜色
        this.classList.add('active');
        // 设置音乐循环播放
        audio.loop = true;
    }
    // 切换音乐播放状态
    isPlaying = !isPlaying;
});