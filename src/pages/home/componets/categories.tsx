

export function Categories(){
    const categories = [
        { title: 'cgn', icon: 'flaticon-developer', link: 'category/cgn/index.htm' },
        { title: 'Finance & Accounting', icon: 'flaticon-developer', link: 'category/finance-accounting/index.htm' },
        { title: 'Business', icon: 'flaticon-developer', link: 'category/business/index.htm' },
        { title: 'Photography & Video', icon: 'flaticon-developer', link: 'category/photography-video/index.htm' },
        { title: 'zze', icon: 'flaticon-developer', link: 'category/zze/index.htm' },
        { title: 'Music1', icon: 'flaticon-developer', link: 'category/music1-285/index.htm' },
        { title: 'Office Productivity', icon: 'flaticon-developer', link: 'category/office-productivity/index.htm' },
        { title: 'Health & Fitness', icon: 'flaticon-developer', link: 'category/health-fitness/index.htm' },
        { title: 'this is a category', icon: 'flaticon-developer', link: 'category/this-is-a-category/index.htm' },
        { title: 'Marketing', icon: 'flaticon-developer', link: 'category/marketing/index.htm' },
        { title: 'IT & Software', icon: 'flaticon-developer', link: 'category/it-software/index.htm' },
        { title: 'AI', icon: 'flaticon-developer', link: 'category/ai/index.htm' },
      ];

    return (
    <>
        <div className="categories-area ptb-100">
        <div className="container">
            <div className="section-title">
            <span className="top-title">Course Categories</span>
            <h2>Our Top Categories</h2>
            </div>
            <div className="row">
            {categories.map((category, index) => (
                <div
                key={index}
                className="col-lg-3 col-sm-6"
                style={{ opacity: 1, transform: 'scale(1) translateZ(1)' }}
                >
                <a href={category.link} className="single-categorie d-flex justify-content-between align-items-center">
                    <h3>{category.title}</h3>
                    <i className={category.icon}></i>
                </a>
                </div>
            ))}
            <div className="col-lg-12">
                <p className="text-center">
                Browse All{' '}
                <a href="courses/index.htm" className="read-more">
                    Courses <i className="ri-arrow-right-line"></i>
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
        
    </>

    )


}