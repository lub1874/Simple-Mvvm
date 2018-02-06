# Simple-Mvvm
一个简单的mvvm框架的实现


Observer
a、实现数据劫持，并将数据变更传递下去，使用Object.defineProperty()来进行
b、Dep实例来进行数据变更的传递。

Compile
a、解析指令，将指令模板中的变量替换成数据，对视图进行初始化操作
b、订阅数据的变化，绑定好更新函数
c、接收到数据变化，通知视图进行view update

Watcher
a、通过Dep接收数据变动的通知，实例化的时候将自己添加到dep中
b、属性变更时，接收dep的notify，调用自身update方法，触发Compile中绑定的更新函数，进而更新视图

Mvvm
a、Observer实现对MVVM自身model数据劫持，监听数据的属性变更，并在变动时进行notify
b、Compile实现指令解析，初始化视图，并订阅数据变化，绑定好更新函数
c、Watcher一方面接收Observer通过dep传递过来的数据变化，一方面通知Compile进行view update
