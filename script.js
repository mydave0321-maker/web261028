// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)
const titles = ["히트", "더 하더 데이 폴", "세븐", "파이트 클럽", "콜래트럴"];
const ratings = [7.9, 6.6, 8.4, 8.4, 7.2];
const years = [1995, 2021, 1995, 1999, 2004];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);
let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++){
 if (ratings[i] >= 8) count++;
 if (ratings[i] > max){
 
      max = ratings[i];
    maxIndex = i;
  }
  let label;

if (ratings[i] >= 8.5) {
    label = "명작";
} else if (ratings[i] >= 7) {
    label = "추천";
} else {
    label = "보통";
}
 console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);

}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");
