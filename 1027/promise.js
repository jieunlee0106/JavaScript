function asyncFunc() {
    const result = new Promise(function (resolve, reject) {
        const now = new Date()
        if(now.getSeconds() % 2 == 0){
            resolve('성공이야')
        }
        else {
        reject('실패야')
        }
    })
    return result 
}

asyncFunc()
.then(function (success){
    console.log(success)
    return 100
})
// 앞에 then에서 return 해준게 넘어옴
.then(res => console.log(res))

.catch(fail => console.log(fail))
// 성공 이든 실패든 무조건 실행 / 성 실 여부를 몰라서 매개변수가 없음
.finally(() => console.log('final'))

