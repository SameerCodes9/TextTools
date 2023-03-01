import React from 'react'

export default function About() {
  return (
    <div className='container'>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Developer
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Sameer Shaik</strong> I'm a CSE undergard from Sastra University about to complete my Btech and passioante about technology and willing to learn new technologies to upskill myselves
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Current position
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Full Stack Developer (intern)</strong> Currently working in Comcast as SDE-1 intern working with tech stack JavaScript,Node JS, React JS and Mong DB for the team <strong>CRD Builder</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Technologies I know
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
I have made a project called Digital Voting System uisng BlockChain technology which uses flask web framework and contains python at backend. The other technologies I know are C,C++,Java,Python,Java Script,HTML,CSS,SQL,MOngo DB,DBMS,Data Structures and I'm good at problem solving
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
