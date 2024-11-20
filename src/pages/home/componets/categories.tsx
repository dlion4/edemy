
import 'font-awesome/css/font-awesome.min.css';

export function Categories(){
    const categories = [
        { title: 'Web Development', icon: 'fa fa-code' },
        { title: 'Finance & Accounting', icon: 'fa fa-calculator' },
        { title: 'Business', icon: 'fa fa-briefcase' },
        { title: 'Photography', icon: 'fa fa-camera' },
        { title: 'Design & Creative Arts', icon: 'fa fa-paint-brush' },
        { title: 'Music & Audio', icon: 'fa fa-music' },
        { title: 'Office Productivity', icon: 'fa fa-tasks' },
        { title: 'Personal Development', icon: 'fa fa-lightbulb-o' },
        { title: 'Marketing', icon: 'fa fa-line-chart' },
        { title: 'IT & Software', icon: 'fa fa-desktop' },
        { title: 'AI & Machine Learning', icon: 'fa fa-robot' },
        { title: 'Video Editing', icon: 'fa fa-video-camera' },
        { title: 'Content Writing', icon: 'fa fa-pencil' },
        { title: 'Photo Editing', icon: 'fa fa-image' },
        { title: 'Web Security', icon: 'fa fa-lock' },
        { title: 'Server Configuration', icon: 'fa fa-server' },
        { title: 'Software Configuration', icon: 'fa fa-cogs' },
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
                <a className="single-categorie d-flex justify-content-between align-items-center">
                    <h3>{category.title}</h3>
                    <i className={category.icon}></i>
                </a>
                </div>
            ))}
            <div className="col-lg-12">
                <p className="text-center">
                Browse All{' '}
                <a href="/auth/" className="read-more">
                    Categories <i className="ri-arrow-right-line"></i>
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
        
    </>

    )


}