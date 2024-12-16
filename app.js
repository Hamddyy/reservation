// تكوين Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYzmLqDZQx6D0MBS7pcKM4ICSykgSyQiU",
  authDomain: "reservation-20.firebaseapp.com",
  projectId: "reservation-20",
  storageBucket: "reservation-20.firebasestorage.app",
  messagingSenderId: "238046004178",
  appId: "1:238046004178:web:38122eab26f1508dd4fe0b",
  measurementId: "G-NMP3T3V30T"
};

// تهيئة Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
const db = firebase.firestore();

// دالة لإرسال البيانات إلى Firestore
document.getElementById('reservationForm').addEventListener('submit', async function(event) {
  event.preventDefault();  // منع إرسال النموذج بشكل تقليدي

  // جمع البيانات من النموذج
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  // إنشاء كائن البيانات
  const reservationData = {
    id: new Date().toISOString(), // استخدام التاريخ كـ ID فريد
    name: name,
    email: email,
    date: date,
    time: time,
    guests: parseInt(guests) // تحويل العدد إلى رقم
  };

  try {
    // إرسال البيانات إلى Firestore
    const docRef = db.collection("reservations").doc(reservationData.id);
    await docRef.set(reservationData);
    alert("تم إرسال البيانات بنجاح!");
  } catch (error) {
    console.error("خطأ في إرسال البيانات: ", error);
    alert("حدث خطأ أثناء إرسال البيانات. راجع وحدة التحكم لمعرفة المزيد.");
  }
});
