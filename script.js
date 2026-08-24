// رقم عمك مفعل بكود مصر (20)
const UNCLE_PHONE = "201155322344"; 

// إعداد روابط أزرار التواصل العائمة
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const callBtn = document.getElementById('callBtn');

    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${UNCLE_PHONE}`;
    }
    if (callBtn) {
        callBtn.href = `tel:+${UNCLE_PHONE}`;
    }
});

// عند الضغط على إرسال البيانات في الاستمارة
const hajjForm = document.getElementById('hajjForm');
if (hajjForm) {
    hajjForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;
        const trip = document.getElementById('tripType').value;
        const notes = document.getElementById('notes').value || 'لا يوجد';

        // إعداد نص الرسالة المنسقة
        const message = `السلام عليكم، أود التسجيل في الرحلة 🕋%0A%0A` +
                        `*الاسم:* ${encodeURIComponent(name)}%0A` +
                        `*رقم التواصل:* ${encodeURIComponent(phone)}%0A` +
                        `*نوع الرحلة:* ${encodeURIComponent(trip)}%0A` +
                        `*ملاحظات:* ${encodeURIComponent(notes)}`;

        // التوجيه إلى واتساب عمك فوراً
        const sendUrl = `https://wa.me/${UNCLE_PHONE}?text=${message}`;
        window.open(sendUrl, '_blank');
    });
}