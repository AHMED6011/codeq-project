import Blog from "../Blog";
import img1 from "../../../public/images/blog.png";
export default function Blogs() {
  const blogsContent = [
    {
      date: "منذ 5 أشهر",
      views: "500 مشاهدة",
      title: "أهم عناصر HTML وكيفية استخدامها ",
      desc: " هناك العديد من العناصر الأساسية التي تُستخدم لإنشاء صفحات الويب وتنظيم محتواها.",
      image: img1,
    },
    {
      date: "منذ 5 أشهر",
      views: "500 مشاهدة",
      title: "أهم عناصر HTML وكيفية استخدامها ",
      desc: " هناك العديد من العناصر الأساسية التي تُستخدم لإنشاء صفحات الويب وتنظيم محتواها.",
      image: img1,
    },
    {
      date: "منذ 5 أشهر",
      views: "500 مشاهدة",
      title: "أهم عناصر HTML وكيفية استخدامها ",
      desc: " هناك العديد من العناصر الأساسية التي تُستخدم لإنشاء صفحات الويب وتنظيم محتواها.",
      image: img1,
    },
  ];
  return (
    <div>
      <h1 className="text-center" style={{marginTop : '150px'}}>استكشف مقالاتنا وأحدث الأخبار</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mt-5">
        {blogsContent.map((item, index) => (
          <Blog
            key={index}
            date={item.date}
            views={item.views}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
