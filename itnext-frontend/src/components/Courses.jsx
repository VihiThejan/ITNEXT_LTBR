import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      title: 'IT Service Management',
      level: 'Intermediate',
      duration: '12 weeks',
      students: '2,847 students',
      rating: '4.9',
      description: 'Master ITIL frameworks, service desk operations, incident management, and IT governance with hands-on virtual lab experiences.',
      image: '/images/course-1.jpg'
    },
    {
      title: 'Cloud Computing',
      level: 'Advanced',
      duration: '16 weeks',
      students: '3,521 students',
      rating: '4.8',
      description: 'Comprehensive training in AWS, Azure, and Google Cloud platforms with real-world deployment scenarios and certification prep.',
      image: '/images/course-2.jpg'
    },
    {
      title: 'Information Security',
      level: 'Advanced',
      duration: '14 weeks',
      students: '1,963 students',
      rating: '4.9',
      description: 'Advanced cybersecurity training covering threat analysis, penetration testing, security frameworks, and compliance standards.',
      image: '/images/course-3.jpg'
    },
    {
      title: 'Network Engineering',
      level: 'Beginner to Advanced',
      duration: '10 weeks',
      students: '2,156 students',
      rating: '4.7',
      description: 'Complete networking fundamentals to advanced topics including routing, switching, network security, and SD-WAN technologies.',
      image: '/images/course-4.jpg'
    }
  ];

  return (
    <section className="courses">
      <div className="courses-container">
        <h2 className="section-title">IT Specialization Tracks</h2>
        <p className="section-subtitle">
          Choose from our comprehensive IT specialization tracks, each designed with industry experts 
          and powered by AI to ensure you master the most in-demand skills.
        </p>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} loading="lazy" />
              </div>
              <div className="course-badge">{course.level}</div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="course-duration">⏱️ {course.duration}</span>
                <span className="course-students">👥 {course.students}</span>
                <span className="course-rating">⭐ {course.rating}</span>
              </div>
              <button className="btn-primary">Start Learning Path</button>
            </div>
          ))}
        </div>
        <div className="courses-cta">
          <button className="btn-secondary">View All Specializations</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
