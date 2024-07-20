import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ReadMoreBlog.css';
import { array, array2, array3, array4, array5, array6, array7, array8 } from './Data';

function ReadMoreBlog() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    return () => {
      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const content = query.get('content');
  
  const renderContent = () => {
    if (content == 'content1') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo" />
            <div className="text-overlay">
              <h1>How To Start A Trucking Business in 2024</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{ textAlign: 'center' }}>{array[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[0].paragraphs}</p>
          <img src={array[0].image} alt="Read More" style={{ maxWidth: '80%', height: 'auto', alignContent: 'center', paddingLeft: '135px' }} />
          <h2 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[1].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[1].paragraphs}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[1].line1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[1].line2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[1].line3}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[1].line4}</p>
          <h2 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[2].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].paragraphs}</p>
          <h3 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[2].subhd1}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].line5}</p>
          <h3 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[2].subhd2}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].line6}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].pointline}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].point1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].point2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].point3}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].point4}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].point5}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].pointline2}</p>
          <h3 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[2].subhd3}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].line7}</p>
          <h3 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[2].subhd4}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].line8}</p>
          <h3 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[2].subhd5}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].line9}</p>
          <h3 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[2].subhd6}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[2].line10}</p>
          <h2 style={{ textAlign: 'left', paddingLeft:'100px' }}>{array[3].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array[3].paragraphs}</p>
        </div>
        </div>
      );
    } else if (content === 'content2') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo1" />
            <div className="text-overlay">
              <h1>How To Be A Truck Dispatcher From Home</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para3}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para4}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para5}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para6}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para7}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array2[0].para8}</p>
          <img src={array2[0].image} alt="Read More" style={{ maxWidth: '100%', height: 'auto', alignContent: 'center', paddingLeft: '340px' }} />
        </div>
        </div>
      );
    }
    else if (content === 'content3') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo" />
            <div className="text-overlay">
              <h1>Average Fuel Mileage for Semi Trucks</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array3[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array3[0].paragraphs}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array3[0].subhd1}</h4>
          <img src={array3[0].image} alt="Read More" style={{ maxWidth: '100%', height: 'auto', alignContent: 'center', paddingLeft: '80px' }} />
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array3[0].line1}</p>
        </div>
        </div>
      );
    }
    else if (content === 'content4') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo" />
            <div className="text-overlay">
              <h1>What Insurance Do Truck Drivers Need</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[0].paragraphs}</p>
          <h3 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[0].subhd1}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[0].pointline}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[1].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[1].paragraphs}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[2].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[2].paragraphs}</p>
          <h3 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].heading}</h3>
          <h3 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].subhd1}</h3>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].point1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].point2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].point3}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].point4}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].point5}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].subhd3}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].pointline1}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].subhd4}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].pointline2}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].subhd5}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].pointline3}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].subhd6}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].pointline4}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].subhd7}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].line1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].point6}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].point7}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array4[3].line2}</p>

</div>
        </div>
      );
    }
    else if (content === 'content5') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo" />
            <div className="text-overlay">
              <h1>Top Reasons to Be an Owner-Operator</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].line1}</p>
          <img src={array5[0].image} alt="Read More" style={{ maxWidth: '100%', height: 'auto', alignContent: 'center', paddingLeft: '80px' }} />
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].subhd1}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].point1}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].subhd2}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].point2}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].subhd3}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].point3}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].subhd4}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].point4}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].subhd5}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].point5}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array5[0].point6}</p>
        </div>
        </div>
      );
    }
    else if (content === 'content6') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo" />
            <div className="text-overlay">
              <h1>How To Become An Owner Operator</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].paragraphs}</p>
          <img src={array6[0].image} alt="Read More" style={{ maxWidth: '70%', height: '50%', alignContent: 'center', paddingLeft: '40px' }} />
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].subhd1}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].point1}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].subhd2}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].line1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].pointline1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].pointline2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].pointline3}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].subhd3}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].point2}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].subhd4}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].point3}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].subhd5}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].point4}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].point5}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].subhd6}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].point6}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].subhd7}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array6[0].point7}</p>
        </div>
        </div>
      );
    }
    else if (content === 'content7') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo" />
            <div className="text-overlay">
              <h1>How To Become A Truck Dispatcher</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para3}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para4}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para5}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point3}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point4}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point5}</p>
          <img src={array7[0].image} alt="Read More" style={{ maxWidth: '70%', height: '50%', alignContent: 'center', paddingRight: '30px' }} />
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].subhd1}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para6}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para7}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para8}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point6}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point7}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point8}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point9}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point10}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point11}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point12}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point13}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point14}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point15}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point16}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point17}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].subhd2}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para9}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para10}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para11}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para12}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].subhd3}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para13}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para14}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].subhd4}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para15}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para16}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para17}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point1}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para18}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para19}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point2}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para20}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para21}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point3}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para22}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para23}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point4}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para24}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para25}</p>
          <h4 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].point5}</h4>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para26}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para27}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].subhd4}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array7[0].para28}</p>
          <img src={array7[0].image2} alt="Read More" style={{ maxWidth: '70%', height: '50%', alignContent: 'center', paddingRight: '30px' }} />
        </div>
        </div>
      );
    }
    else if (content === 'content8') {
      return (
        <div>
          <div className="full-width-photo1">
            <img src="/cc articles.jpg" alt="Full Width Photo" />
            <div className="text-overlay">
              <h1>Why Owner Operators Hire Truck Dispatch Companies</h1>
            </div>
          </div>
          <div className='an'>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].heading}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].para1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].para2}</p>
          <img src={array8[0].image} alt="Read More" style={{ maxWidth: '70%', height: '50%', alignContent: 'center', paddingRight: '30px' }} />
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].subhd1}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].para3}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].subhd2}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].para4}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].subhd3}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point1}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point2}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point3}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point4}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point5}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point6}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point7}</p>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].point8}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].subhd4}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].para5}</p>
          <h2 style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].subhd5}</h2>
          <p style={{textAlign: 'left', paddingLeft:'100px', paddingRight:'100px'}}>{array8[0].para6}</p>
        </div>
        </div>
      );
    }
    else {
      return <h2 style={{ textAlign: 'center' }}>No content selected</h2>;
    }
  
  };


  return (
    <div>


      {renderContent()}

      <img
        src="/scroll top arrow.png"
        alt="Arrow Icon"
        className="scroll-to-top"
        id="scrollToTopBtn"
      />
    </div>
  );
}

export default ReadMoreBlog;
