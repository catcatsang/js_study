// const userService = (() => {
//     const getList = (callback) => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then(callback)
//     }

//     return {
//         getList: getList
//     }
// })();

// const printUsers = (users) => {
//     console.log(users);
// }

// userService.getList(printUsers);

// async가 함수 앞에 붙어있으면, 리턴값은 Promise객체로 감싸져서 리턴된다.
// async를 붙이게 되면, 비동기로 전환되고 이 때 각 비동기 코드는 await를 붙여서
// 개발자가 생각하는 순서대로 개발할 수 있다.
const userService = (() => {
  const getList = async (callback) => {
    // getList 뒤에 async 를 붙혀서 비동기를 ... 맞춰뜹니다,,
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // 유저 데이터 불러오기기
    const users = await response.json();
    if (callback) {
      callback(users);
    }
  };

  return {
    getList: getList,
  };
})();

const printUsers = (users) => {
  console.log(users);
};

userService.getList(printUsers);
