import React, { useEffect, useState } from 'react';

import axios from "axios"

function App() {
  axios("http://localhost:8080/api/course/banners").then(res => {
    console.log(res.data)
  })

  return (
    <div className="App">
      aaa
    </div>
  );
}

export default App;