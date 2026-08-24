// رقم عمك بكود مصر (20)
const UNCLE_PHONE = "201155322344";

// دالة اختيار الرحلة عند الضغط على الكروت (لكي لا يحدث خطأ في الصفحة)
function selectTrip(tripName) {
    const tripSelect = document.getElementById('tripType');
    if (tripSelect) {
        tripSelect.value = tripName;
    }
}

// تشغيل الأزرار والاستمارة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. إعداد أزرار التواصل العائمة (واتساب واتصال)
    const whatsappBtn = document.getElementById('whatsappBtn');
    const callBtn = document.getElementById('callBtn');

    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${UNCLE_PHONE}`;
    }
    if (callBtn) {
        callBtn.href = `tel:+${UNCLE_PHONE}`;
    }

    // 2. تشغيل استمارة الحجز عند الضغط على زر الإرسال
    const hajjForm = document.getElementById('hajjForm');
    
    if (hajjForm) {
        hajjForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة

            // جلب البيانات من الخانات
            const nameInput = document.getElementById('fullname');
            const phoneInput = document.getElementById('phone');
            const tripInput = document.getElementById('tripType');
            const notesInput = document.getElementById('notes');

            const name = nameInput ? nameInput.value : '';
            const phone = phoneInput ? phoneInput.value : '';
            const trip = tripInput ? tripInput.value : '';
            const notes = (notesInput && notesInput.value) ? notesInput.value : 'لا يوجد';

            // تجهيز نص الرسالة
            const message = `السلام عليكم، أود التسجيل في الرحلة 🕋%0A%0A` +
                            `*الاسم:* ${encodeURIComponent(name)}%0A` +
                            `*رقم التواصل:* ${encodeURIComponent(phone)}%0A` +
                            `*الرحلة المختارة:* ${encodeURIComponent(trip)}%0A` +
                            `*ملاحظات:* ${encodeURIComponent(notes)}`;

            // فتح الواتساب في نافذة جديدة
            const whatsappUrl = `https://wa.me/${UNCLE_PHONE}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});