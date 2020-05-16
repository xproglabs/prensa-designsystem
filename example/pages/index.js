import React from 'react';
import Dialog from '../components/dialog';
import Form from '../components/form';

const Example = () => {
  return (
    <React.Fragment>
      <Form />
      <Dialog />
      <div className="w-100 mw-xl fx-cnt-btw">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>
    </React.Fragment>
  )
}

export default Example;