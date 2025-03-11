body {
    background-color: #f9f9f9;
    line-height: 2;
    margin: 0;
  }
  
  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 60px;
  }
  
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }
  
  #search-input {
    width: 60%;
    max-width: 400px;
    padding: 10px 20px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 18px;
    color: #333;
  }
  
  #search-button {
    padding: 10px 20px;
    background-color: #b81a21;
    color: white;
    border: none;
    font-size: 18px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
  }
  
  #search-button:hover {
    background-color: #b63e44;
  }
  
  .search-results {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .search-result {
    margin-bottom: 60px;
    width: 30%;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .search-result:hover img {
    transform: scale(1.05);
  }
  
  .search-result img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .search-result a {
    padding: 10px;
    display: block;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
  }
  
  .search-result:hover a {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  #show-more-button {
    background-color: #080808;
    border: none;
    color: white;
    padding: 10px 20px;
    display: block;
    margin: 20px auto;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: none;
  }
  
  #show-more-button:hover {
    background-color: #14191bd7;
  }
  
  @media screen and (max-width: 768px) {
    .search-result {
      width: 45%;
    }
  }
  @media screen and (max-width: 480px) {
    .search-result {
      width: 100%;
    }
  
    form {
      flex-direction: column;
    }
  
    #search-input {
      margin-bottom: 20px;
      width: 85%;
    }
  }
  