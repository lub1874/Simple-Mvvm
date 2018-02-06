/**
 * Created by lub1874 on 2018/1/30.
 */

let uid = 0

/**
 * 添加依赖类
 * 用来添加订阅者，删除订阅者，以及派发通知
 */
class Dep {
    constructor() {
        this.id = uid++
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    removeSub(sub) {
        let index = this.subs.indexOf(sub)

        if (index > -1) {
            this.subs = this.subs.splice(index, 1)
        }
    }

    notify() {
        this.subs.forEach( () => {
            sub.update()
        })
    }

    depend() {
        Dep.target.addDep(this)
    }
}

Dep.target = null

export default Dep