// الملف دا عبارة عن كوبري او حلقة الوصل الي بيوصل بيها ملف الاب لملف الاندكس
// هنا بربط اي حاجه عايزاها بالبروجكت زي مثلا الخطوط والبوتستراب

// الملف دا بيمسك الرروت اللي موجود في الانتري فايل ويحط فيه الكومبوننت بتاع الابب

import  ReactDOM  from "react-dom/client";  // step 1
import {App} from './App';  //  بعمل امبورت للاابب لاني هجيبه من فايل تاني واستخدمه هنا
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // استدعيت البوتستراب كل الكومبوننت اللي عندي هتشوفه
// import 'bootstrap/dist/css/bootstrap.min.css'; // اي طريقة تنفع عادي
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
//import './index.css'; //في حالة اني عايزه ااوفرايد ع البوتستراب واعمل حاجه للبروجكت ككل


var root = ReactDOM.createRoot(document.getElementById('root'));   //step2
// 1- reactDom دي حاجة عملاها الرياكت عشان تتعامل مع الدووم
//2-  reactDom inclode createRoot() دي بتاخد الايليمنت اللي انا عايزاه يبقى رووت
//3-  عشلن اعرف اتحرك بالروت بتااعي بحطه ف فاريبل 

// دلوقتي خطوة اني احط الااب جوا الرووت

root.render(<App/>) // انا هنا بقوله ريندرلي او رجعلي او اظهرلي الاب جوا الارووت اللي موجودة ف الانتري فايل