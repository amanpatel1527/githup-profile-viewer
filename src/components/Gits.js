// // // import React, { useState } from 'react';
// // // import './GitHubProfileViewer.css';

// // // const Gits = () => {
// // // const [username, setUsername] = useState('');
// // // const [userData, setUserData] = useState(null);
// // // const [repositories, setRepositories] = useState([]);
// // // const [languageFilter, setLanguageFilter] = useState('');
// // // const [dateFilter, setDateFilter] = useState('');
// // // const [starsFilter, setStarsFilter] = useState('');
// // // const [loading, setLoading] = useState(false);
// // // const [error, setError] = useState('');

// // // const handleSearch = async () => {
// // // setLoading(true);
// // // setError('');


// // // try {
// // //   const userResponse = await fetch(`https://api.github.com/users/${username}`);

// // //   if (!userResponse.ok) {
// // //     throw new Error('User profile not found');
// // //   }

// // //   const userData = await userResponse.json();
// // //   setUserData(userData);

// // //   const repositoriesResponse = await fetch(userData.repos_url);

// // //   if (!repositoriesResponse.ok) {
// // //     throw new Error('Error fetching repositories');
// // //   }

// // //   const repositoriesData = await repositoriesResponse.json();
// // //   setRepositories(repositoriesData);
// // // } catch (error) {
// // //   setError(error.message);
// // // } finally {
// // //   setLoading(false);
// // // }
// // // };

// // // const handleLanguageFilter = (e) => {
// // // setLanguageFilter(e.target.value);
// // // };

// // // const handleDateFilter = (e) => {
// // // setDateFilter(e.target.value);
// // // };

// // // const handleStarsFilter = (e) => {
// // // setStarsFilter(e.target.value);
// // // };

// // // const filteredRepositories = repositories.filter((repo) => {
// // // if (languageFilter && repo.language !== languageFilter) {
// // // return false;
// // // }
// // // if (dateFilter === 'today') {
// // // const today = new Date();
// // // const repoDate = new Date(repo.created_at);
// // // return repoDate.toDateString() === today.toDateString();
// // // }
// // // if (dateFilter === 'this-week') {
// // // const today = new Date();
// // // const repoDate = new Date(repo.created_at);
// // // const weekStart = new Date(
// // // today.getFullYear(),
// // // today.getMonth(),
// // // today.getDate() - today.getDay()
// // // );
// // // return repoDate >= weekStart;
// // // }
// // // if (dateFilter === 'this-month') {
// // // const today = new Date();
// // // const repoDate = new Date(repo.created_at);
// // // const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
// // // return repoDate >= monthStart;
// // // }
// // // if (starsFilter === 'all') {
// // // return true;
// // // }
// // // if (starsFilter) {
// // // const starsCount = parseInt(starsFilter.slice(1));
// // // return repo.stargazers_count > starsCount;
// // // }
// // // return true;
// // // });

// // // return (
// // // <div className="container">
// // // <div className="search-container">
// // // <input
// // // type="text"
// // // placeholder="Enter GitHub username"
// // // value={username}
// // // onChange={(e) => setUsername(e.target.value)}
// // // />
// // // <button onClick={handleSearch}>Search</button>
// // // </div>


// // //   {loading && <p>Loading...</p>}

// // //   {error && <p className="error">{error}</p>}

// // //   {userData && (
// // //     <div className="user-container">
// // //       <h2>{userData.name}</h2>
// // //       <p>{userData.bio}</p>
// // //       <p>Followers: {userData.followers}</p>
// // //       <p>Following: {userData.following}</p>
// // //     </div>
// // //   )}

// // //   {repositories.length > 0 && (
// // //     <div className="filter-container">
// // //       <label htmlFor="filter-language">Filter by Language:</label>
// // //       <select id="filter-language" value={languageFilter} onChange={handleLanguageFilter}>
// // //         <option value="">All Languages</option>
// // //         <option value="JavaScript">JavaScript</option>
// // //         <option value="Python">Python</option>
// // //         <option value="Java">Java</option>
// // //         {/* Add more options for other programming languages */}
// // //       </select>

// // //       <label htmlFor="filter-date">Filter by Date:</label>
// // //       <select id="filter-date" value={dateFilter} onChange={handleDateFilter}>
// // //         <option value="">All Dates</option>
// // //         <option value="today">Today</option>
// // //         <option value="this-week">This Week</option>
// // //         <option value="this-month">This Month</option>
// // //         {/* Add more options for different date ranges */}
// // //       </select>

// // //       <label htmlFor="filter-stars">Filter by Stars:</label>
// // //       <select id="filter-stars" value={starsFilter} onChange={handleStarsFilter}>
// // //         <option value="">All Stars</option>
// // //         <option value=">100">Greater than 100</option>
// // //         <option value=">500">Greater than 500</option>
// // //         <option value=">1000">Greater than 1000</option>
// // //         <option value="all">Show All</option>
// // //         {/* Add more options for different star ranges */}
// // //       </select>
// // //     </div>
// // //   )}

// // //   {filteredRepositories.length > 0 && (
// // //     <div className="repo-container">
// // //       <h3>Repositories:</h3>
// // //       <div className="repo-grid">
// // //         {filteredRepositories.map((repo) => (
// // //           <div className="repo-box" key={repo.id}>
// // //             <h4 className="repo-name">
// // //               <a href={repo.html_url}>{repo.name}</a>
// // //             </h4>
// // //             <p className="repo-description">{repo.description}</p>
// // //             <div className="repo-details">
// // //               <span>Language: {repo.language}</span>
// // //               <span>Stars: {repo.stargazers_count}</span>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   )}
// // // </div>
// // // );
// // // };

// // // export default Gits;










// // import React, { useState, useEffect } from 'react';
// // import './GitHubProfileViewer.css';

// // const Gits = () => {
// //   const [username, setUsername] = useState('');
// //   const [userData, setUserData] = useState(null);
// //   const [repositories, setRepositories] = useState([]);
// //   const [languageFilter, setLanguageFilter] = useState('');
// //   const [dateFilter, setDateFilter] = useState('');
// //   const [starsFilter, setStarsFilter] = useState('');
// //   const [userActivity, setUserActivity] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');

// //   const handleSearch = async () => {
// //     setLoading(true);
// //     setError('');

// //     try {
// //       const userResponse = await fetch(`https://api.github.com/users/${username}`);
// //       const userData = await userResponse.json();

// //       if (userResponse.ok) {
// //         setUserData(userData);

// //         const repositoriesResponse = await fetch(userData.repos_url);
// //         const repositoriesData = await repositoriesResponse.json();
// //         setRepositories(repositoriesData);

// //         const activityResponse = await fetch(`https://api.github.com/users/${username}/events`);
// //         const activityData = await activityResponse.json();
// //         setUserActivity(activityData);
// //       } else {
// //         throw new Error(userData.message);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data from GitHub API:', error);
// //       setError('An error occurred while fetching data.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (username) {
// //       handleSearch();
// //     }
// //   }, [username]);

// //   const handleLanguageFilter = (e) => {
// //     setLanguageFilter(e.target.value);
// //   };

// //   const handleDateFilter = (e) => {
// //     setDateFilter(e.target.value);
// //   };

// //   const handleStarsFilter = (e) => {
// //     setStarsFilter(e.target.value);
// //   };

// //   const filteredRepositories = repositories.filter((repo) => {
// //     if (languageFilter && repo.language !== languageFilter) {
// //       return false;
// //     }
// //     if (dateFilter === 'today') {
// //       const today = new Date();
// //       const repoDate = new Date(repo.created_at);
// //       return repoDate.toDateString() === today.toDateString();
// //     }
// //     if (dateFilter === 'this-week') {
// //       const today = new Date();
// //       const repoDate = new Date(repo.created_at);
// //       const weekStart = new Date(
// //         today.getFullYear(),
// //         today.getMonth(),
// //         today.getDate() - today.getDay()
// //       );
// //       return repoDate >= weekStart;
// //     }
// //     if (dateFilter === 'this-month') {
// //       const today = new Date();
// //       const repoDate = new Date(repo.created_at);
// //       const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
// //       return repoDate >= monthStart;
// //     }
// //     if (starsFilter === 'all') {
// //       return true;
// //     }
// //     if (starsFilter) {
// //       const starsCount = parseInt(starsFilter.slice(1));
// //       return repo.stargazers_count > starsCount;
// //     }
// //     return true;
// //   });

// //   return (
// //     <div className="container">
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Enter GitHub username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <button onClick={handleSearch}>Search</button>
// //       </div>

// //       {loading && <p>Loading...</p>}

// //       {error && <p className="error">{error}</p>}

// //       {userData && (
// //         <div className="user-container">
// //           <h2>{userData.name}</h2>
// //           <p>{userData.bio}</p>
// //           <p>Followers: {userData.followers}</p>
// //           <p>Following: {userData.following}</p>
// //         </div>
// //       )}

// //       {repositories.length > 0 && (
// //         <div className="filter-container">
// //           <label htmlFor="filter-language">Filter by Language:</label>
// //           <select id="filter-language" value={languageFilter} onChange={handleLanguageFilter}>
// //             <option value="">All Languages</option>
// //             <option value="JavaScript">JavaScript</option>
// //             <option value="Python">Python</option>
// //             <option value="Java">Java</option>
// //             <option value="Java">React</option>
// //             {/* Add more options for other programming languages */}
// //           </select>

// //           <label htmlFor="filter-date">Filter by Date:</label>
// //           <select id="filter-date" value={dateFilter} onChange={handleDateFilter}>
// //             <option value="">All Dates</option>
// //             <option value="today">Today</option>
// //             <option value="this-week">This Week</option>
// //             <option value="this-month">This Month</option>
// //             {/* Add more options for different date ranges */}
// //           </select>

// //           <label htmlFor="filter-stars">Filter by Stars:</label>
// //           <select id="filter-stars" value={starsFilter} onChange={handleStarsFilter}>
// //             <option value="">All Stars</option>
// //             <option value=">100">Greater than 100</option>
// //             <option value=">500">Greater than 500</option>
// //             <option value=">1000">Greater than 1000</option>
// //             <option value="all">Show All</option>
// //             {/* Add more options for different star ranges */}
// //           </select>
// //         </div>
// //       )}

// //       {filteredRepositories.length > 0 && (
// //         <div className="repo-container">
// //           <h3>Repositories:</h3>
// //           <div className="repo-grid">
// //             {filteredRepositories.map((repo) => (
// //               <div className="repo-box" key={repo.id}>
// //                 <h4 className="repo-name">
// //                   <a href={repo.html_url}>{repo.name}</a>
// //                 </h4>
// //                 <p className="repo-description">{repo.description}</p>
// //                 <div className="repo-details">
// //                   <span>Language: {repo.language}</span>
// //                   <span>Stars: {repo.stargazers_count}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Gits;











// import React, { useState } from 'react';
// import axios from 'axios';
// import './GitHubProfileViewer.css';

// const GithubProfileViewer = () => {
//   const [username, setUsername] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [repositories, setRepositories] = useState([]);
//   const [languageFilter, setLanguageFilter] = useState('');
//   const [dateFilter, setDateFilter] = useState('');
//   const [starsFilter, setStarsFilter] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.get(`https://api.github.com/users/${username}`, {
//         headers: {
//           Authorization: 'Bearer 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',
//         },
//       });
//       const userData = response.data;
//       setUserData(userData);

//       const repositoriesResponse = await axios.get(userData.repos_url, {
//         headers: {
//           Authorization: 'Bearer {your_token}',
//         },
//       });
//       const repositoriesData = repositoriesResponse.data;
//       setRepositories(repositoriesData);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLanguageFilter = (e) => {
//     setLanguageFilter(e.target.value);
//   };

//   const handleDateFilter = (e) => {
//     setDateFilter(e.target.value);
//   };

//   const handleStarsFilter = (e) => {
//     setStarsFilter(e.target.value);
//   };

//   const filteredRepositories = repositories.filter((repo) => {
//     if (languageFilter && repo.language !== languageFilter) {
//       return false;
//     }
//     if (dateFilter === 'today') {
//       const today = new Date();
//       const repoDate = new Date(repo.created_at);
//       return repoDate.toDateString() === today.toDateString();
//     }
//     if (dateFilter === 'this-week') {
//       const today = new Date();
//       const repoDate = new Date(repo.created_at);
//       const weekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
//       return repoDate >= weekStart;
//     }
//     if (dateFilter === 'this-month') {
//       const today = new Date();
//       const repoDate = new Date(repo.created_at);
//       const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
//       return repoDate >= monthStart;
//     }
//     if (starsFilter === 'all') {
//       return true;
//     }
//     if (starsFilter) {
//       const starsCount = parseInt(starsFilter.slice(1));
//       return repo.stargazers_count > starsCount;
//     }
//     return true;
//   });

//   return (
//     <div className="container">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {loading && <p>Loading...</p>}

//       {error && <p className="error">{error}</p>}

//       {userData && (
//         <div className="user-container">
//           <h2>{userData.name}</h2>
//           <p>{userData.bio}</p>
//           <p>Followers: {userData.followers}</p>
//           <p>Following: {userData.following}</p>
//         </div>
//       )}

//       {repositories.length > 0 && (
//         <div className="filter-container">
//           <label htmlFor="filter-language">Filter by Language:</label>
//           <select id="filter-language" value={languageFilter} onChange={handleLanguageFilter}>
//             <option value="">All Languages</option>
//             <option value="JavaScript">JavaScript</option>
//             <option value="Python">Python</option>
//             <option value="Java">Java</option>
//             {/* Add more options for other programming languages */}
//           </select>

//           <label htmlFor="filter-date">Filter by Date:</label>
//           <select id="filter-date" value={dateFilter} onChange={handleDateFilter}>
//             <option value="">All Dates</option>
//             <option value="today">Today</option>
//             <option value="this-week">This Week</option>
//             <option value="this-month">This Month</option>
//             {/* Add more options for different date ranges */}
//           </select>

//           <label htmlFor="filter-stars">Filter by Stars:</label>
//           <select id="filter-stars" value={starsFilter} onChange={handleStarsFilter}>
//             <option value="">All Stars</option>
//             <option value=">100">Greater than 100</option>
//             <option value=">500">Greater than 500</option>
//             <option value=">1000">Greater than 1000</option>
//             <option value="all">Show All</option>
//             {/* Add more options for different star ranges */}
//           </select>
//         </div>
//       )}

//       {filteredRepositories.length > 0 && (
//         <div className="repo-container">
//           <h3>Repositories:</h3>
//           <div className="repo-grid">
//             {filteredRepositories.map((repo) => (
//               <div className="repo-box" key={repo.id}>
//                 <h4 className="repo-name">
//                   <a href={repo.html_url}>{repo.name}</a>
//                 </h4>
//                 <p className="repo-description">{repo.description}</p>
//                 <div className="repo-details">
//                   <span>Language: {repo.language}</span>
//                   <span>Stars: {repo.stargazers_count}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GithubProfileViewer;
