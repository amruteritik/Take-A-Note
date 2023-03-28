import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Bucket from "./Bucket";
import MainNoteArea from "./MainNoteArea";
import BucketArea from "./BucketArea";

function App() {
  const [bucket, setBucket] = useState([]);

  function addBucket(newBucket) {
    setBucket((prevBucket) => {
      return [...prevBucket, newBucket];
    });
  }

  function deleteBucket(id) {
    setBucket((prevBucket) => {
      return prevBucket.filter((bucketItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MainNoteArea onAdd={addBucket} />
              {bucket.map((bucketItem, index) => {
                return (
                  <Bucket
                    key={index}
                    id={index}
                    title={bucketItem}
                    onDelete={deleteBucket}
                  />
                );
              })}
            </div>
          }
        />
        {bucket.map((bucketItem, index) => {
                return (
                <Route path={`/${bucketItem}`} element={<BucketArea title={bucketItem} />} />
                     )
              })};

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
