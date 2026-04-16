import React from 'react'

function Team() {
  return (
    <div className='container px-3 px-md-5 py-4 py-md-5 text-center'>

      <h2 className='mb-4'>People</h2>

      {/* Featured member — Nithin */}
      <div className='row align-items-center g-4 mb-4'>

        <div className='col-12 col-md-4 text-center'>
          <img
            className='rounded-circle img-fluid'
            src='media/images/nithinKamath.jpg'
            alt='Nithin Kamath'
            style={{ maxWidth: '200px', width: '70%' }}
          />
          <h4 className='mt-4'>Nithin Kamath</h4>
          <p className='text-muted'>Founder, CEO</p>
        </div>

        <div className='col-12 col-md-8 text-center text-md-start px-3 px-md-5'>
          <h6 className='mt-2' style={{ lineHeight: '1.8' }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced
            during his decade long stint as a trader. Today, Zerodha has changed the landscape
            of the Indian broking industry.
          </h6>
          <h6 className='mt-4' style={{ lineHeight: '1.8' }}>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the
            Market Data Advisory Committee (MDAC).
          </h6>
        </div>

      </div>

      <hr className='my-4' />

      {/* Rest of the team — 2 per row on mobile, 3 per row on desktop */}
      <div className='row g-4 py-3 mt-2'>

        {[
          { src: 'media/images/Nikhil.jpg',   name: 'Nikhil Kamath',      role: 'Co-Founder, CFO'     },
          { src: 'media/images/Kailash.jpg',  name: 'Dr. Kailash Nadh',   role: 'CTO'                 },
          { src: 'media/images/Venu.jpg',     name: 'Venu Madhav',        role: 'COO'                 },
          { src: 'media/images/Seema.jpg',    name: 'Seema Patil',        role: 'Director'            },
          { src: 'media/images/Karthik.jpg',  name: 'Karthik Rangappa',   role: 'Chief of Education'  },
          { src: 'media/images/Austin.jpg',   name: 'Austin Prakash',     role: 'Director Strategy'   },
        ].map((person) => (
          <div key={person.name} className='col-6 col-md-4 text-center'>
            <img
              className='rounded-circle img-fluid'
              src={person.src}
              alt={person.name}
              style={{ maxWidth: '160px', width: '70%' }}
            />
            <h5 className='mt-4'>{person.name}</h5>
            <p className='text-muted small'>{person.role}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Team