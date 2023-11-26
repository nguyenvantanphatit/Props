import React from "react";

function Good({ data }) {
  // const arr1 = [...new Set(arr)]
  // const arr2 = arr1.reduce((a,b) => a <b?a:b)
  
  const arr = [1, 4, 5, 2, 1, 6, 3, 9, 7, 6, 7, 123, 1, 2, 3, 4, 6, 67, 3, 1]
  const arr2 = arr.filter((a) => a > 60)
  // const arr1 = [...new Set(arr)]
  // const arr2 = arr1.sort((a,b) => a - b)

  // const arr2 = arr1.reduce( (a,b) => a  > b ? a : b) // max 
  // const arr2 = Math.max(...arr1) // max
  // const arr2 = arr1[0];// max
  // const arr2 = arr1.reduce((a,b) => a * b , 1)// sum
  // const arr2 = arr1.filter((e) => e > 60)
  // const arr2 = arr1.map((e) => e + 2)
  // const arr2 = arr1.splice(0,3).reduce((a,b ) => a * b , 1) // tích 3 số
  // const arr2 = arr1.filter( ( e) => e ===1).length// đếm số phần từ bằng 1
  // const arr2 = arr1.splice(-3).reduce((a,b)=> a + b , 0)  // đếm số phần từ bằng 1
  // console.log('arr1',arr1)
  console.log('arr2',arr2)

  return (
    <div>
      <h2>GOod</h2>
      <div>
        {data?.map((item) => (
          <p key={item.id}>
            {item.email}
            {item.password}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Good;
