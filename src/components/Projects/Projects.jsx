import Image from "next/image";
export default function Projects() {
  return (
    <div
      className="container"
      style={{ marginTop: "100px", textAlign: "center" }}
    >
      <div style={{ position: "absolute", right: "0" }}>
        <Image
          src="/images/blog_star_bg.png"
          alt="blog_star_bg"
          width={264}
          height={846}
        />
      </div>
      <h1
        className="text-center"
        style={{ fontSize: "40px", fontWeight: "500", lineHeight: "172%" }}
      >
        مشاريعنا الرقمية المبتكرة
      </h1>
      <p style={{ fontSize: "16px", fontWeight: "600" }}>
        نحن في CODEQ نؤمن بأن الإبداع والتقنية يسيران جنبًا إلى جنب. في هذا
        القسم، نعرض مجموعة من المشاريع التي تعكس شغفنا بالتطوير والابتكار، بدءًا
        من البرمجيات الحديثة وصولًا إلى الحلول الرقمية المتقدمة.
      </p>
      <div
        className="container"
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          height: "700px",
          gap: "8px",
        }}
      >
        <div
          style={{
            gridColumn: "1/2",
            borderRadius: "10px",
            backgroundImage: "url('/images/webdesign_project.png')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            border: "1.5px solid #252E3D",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            padding: "20px",
            justifyContent: "flex-end",
          }}
        >
          <h1 style={{ fontWeight: "500", fontSize: "24px", color: "#EE552C" }}>
            {" "}
            مشاريع تطوير المواقع
          </h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "151%",
            }}
          >
            من الفكرة إلى الإطلاق، نقدم حلولًا متكاملة لتصميم وتطوير المواقع
            الإلكترونية، سواء كانت مواقع أعمال، متاجر إلكترونية، أو منصات
            تعليمية.
          </p>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontWeight: "500",
              textAlign: "right",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            عرض جميع المشاريع
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.73836 12.7432L0.229535 7.0942C0.146067 7.00861 0.0868056 6.91589 0.0517494 6.81603C0.0172497 6.71617 0 6.60918 0 6.49506C0 6.38094 0.0172497 6.27395 0.0517494 6.17409C0.0868056 6.07424 0.146067 5.98151 0.229535 5.89592L5.73836 0.246898C5.89139 0.0899803 6.08253 0.00781295 6.31178 0.000395038C6.54159 -0.00645227 6.73997 0.0757151 6.9069 0.246898C7.07384 0.403815 7.16092 0.599819 7.16815 0.83491C7.17483 1.07057 7.0947 1.27399 6.92777 1.44518L2.83788 5.63915H12.1653C12.4018 5.63915 12.6002 5.72103 12.7604 5.8848C12.9201 6.04913 13 6.25255 13 6.49506C13 6.73757 12.9201 6.94071 12.7604 7.10447C12.6002 7.26881 12.4018 7.35097 12.1653 7.35097H2.83788L6.92777 11.5449C7.08079 11.7019 7.16092 11.9016 7.16815 12.1441C7.17483 12.3866 7.0947 12.5863 6.92777 12.7432C6.77475 12.9144 6.57999 13 6.3435 13C6.10701 13 5.9053 12.9144 5.73836 12.7432Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div
          style={{
            gridColumn: "2/3",
            borderRadius: "10px",
            backgroundImage: "url('/images/visualId_project.png')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            border: "1.5px solid #252E3D",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            padding: "20px",
            justifyContent: "flex-end",
          }}
        >
          <h1 style={{ fontWeight: "500", fontSize: "24px", color: "#EE552C" }}>
            {" "}
            مشاريع الهوية البصرية
          </h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "151%",
            }}
          >
            نؤمن بأن الهوية البصرية هي جوهر أي علامة تجارية ناجحة. في هذا القسم،
            نقدم أعمالنا في تصميم الشعارات، اختيار الألوان، إنشاء دليل الهوية
            البصرية، والتصميمات الجرافيكية التي تبرز هوية العلامات التجارية
            بأسلوب فريد ومبتكر.
          </p>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontWeight: "500",
              textAlign: "right",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            عرض جميع المشاريع
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.73836 12.7432L0.229535 7.0942C0.146067 7.00861 0.0868056 6.91589 0.0517494 6.81603C0.0172497 6.71617 0 6.60918 0 6.49506C0 6.38094 0.0172497 6.27395 0.0517494 6.17409C0.0868056 6.07424 0.146067 5.98151 0.229535 5.89592L5.73836 0.246898C5.89139 0.0899803 6.08253 0.00781295 6.31178 0.000395038C6.54159 -0.00645227 6.73997 0.0757151 6.9069 0.246898C7.07384 0.403815 7.16092 0.599819 7.16815 0.83491C7.17483 1.07057 7.0947 1.27399 6.92777 1.44518L2.83788 5.63915H12.1653C12.4018 5.63915 12.6002 5.72103 12.7604 5.8848C12.9201 6.04913 13 6.25255 13 6.49506C13 6.73757 12.9201 6.94071 12.7604 7.10447C12.6002 7.26881 12.4018 7.35097 12.1653 7.35097H2.83788L6.92777 11.5449C7.08079 11.7019 7.16092 11.9016 7.16815 12.1441C7.17483 12.3866 7.0947 12.5863 6.92777 12.7432C6.77475 12.9144 6.57999 13 6.3435 13C6.10701 13 5.9053 12.9144 5.73836 12.7432Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div
          style={{
            gridColumn: "1/3",
            borderRadius: "10px",
            backgroundImage: "url('/images/programming_project.png')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            border: "1.5px solid #252E3D",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            padding: "20px",
            justifyContent: "flex-end",
          }}
        >
          <h1 style={{ fontWeight: "500", fontSize: "24px", color: "#EE552C" }}>
            {" "}
            مشاريع البرمجيات
          </h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "151%",
              width: "746px",
            }}
          >
            نطور مواقع إلكترونية متميزة تلبي احتياجات المستخدمين، سواء كانت
            مواقع تجارية، منصات إلكترونية، أو حلول ويب مخصصة. نحرص على تقديم
            تجربة مستخدم سلسة مع تصميم عملي وحديث.
          </p>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontWeight: "500",
              textAlign: "right",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            عرض جميع المشاريع
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.73836 12.7432L0.229535 7.0942C0.146067 7.00861 0.0868056 6.91589 0.0517494 6.81603C0.0172497 6.71617 0 6.60918 0 6.49506C0 6.38094 0.0172497 6.27395 0.0517494 6.17409C0.0868056 6.07424 0.146067 5.98151 0.229535 5.89592L5.73836 0.246898C5.89139 0.0899803 6.08253 0.00781295 6.31178 0.000395038C6.54159 -0.00645227 6.73997 0.0757151 6.9069 0.246898C7.07384 0.403815 7.16092 0.599819 7.16815 0.83491C7.17483 1.07057 7.0947 1.27399 6.92777 1.44518L2.83788 5.63915H12.1653C12.4018 5.63915 12.6002 5.72103 12.7604 5.8848C12.9201 6.04913 13 6.25255 13 6.49506C13 6.73757 12.9201 6.94071 12.7604 7.10447C12.6002 7.26881 12.4018 7.35097 12.1653 7.35097H2.83788L6.92777 11.5449C7.08079 11.7019 7.16092 11.9016 7.16815 12.1441C7.17483 12.3866 7.0947 12.5863 6.92777 12.7432C6.77475 12.9144 6.57999 13 6.3435 13C6.10701 13 5.9053 12.9144 5.73836 12.7432Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
