// 导入mongoose模块
const mongoose = require('mongoose');


// 数据库连接
// mongoose.connect('mongodb://user:pass@localhost:port/database')
//user:用户名   pass：密码     port：端口号   database：数据库的名字
mongoose.connect('mongodb://lisi:lisi@localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))

// 创建任务集合规则
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
// 创建todo集合
const Task = mongoose.model('task', taskSchema);

// 创建集合实例
// const task = new Task({
//     title: '吃饭',
//     completed: false,
// });
const task = new Task({
    title: '睡觉',
    completed: false,
});
// const task = new Task({
//     title: '打豆豆',
//     completed: false,
// });
// 将数据保存到数据库中
task.save();