import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import { MdEmail, MdPersonOutline, MdPhone, MdLock } from 'react-icons/md';
import styles from './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    leetcode: '',
    github: '',
    linkedin: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formCard}>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Join our developer community</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <MdPersonOutline className={styles.icon} />
            <input
              name="username"
              type="text"
              required
              className={styles.input}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <MdEmail className={styles.icon} />
            <input
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <MdLock className={styles.icon} />
            <input
              name="password"
              type="password"
              required
              className={styles.input}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <MdPhone className={styles.icon} />
            <input
              name="phone"
              type="tel"
              required
              className={styles.input}
              placeholder="Phone number"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLaptopCode className={styles.icon} />
            <input
              name="leetcode"
              type="text"
              required
              className={styles.input}
              placeholder="LeetCode username"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaGithub className={styles.icon} />
            <input
              name="github"
              type="text"
              required
              className={styles.input}
              placeholder="GitHub username"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLinkedin className={styles.icon} />
            <input
              name="linkedin"
              type="text"
              required
              className={styles.input}
              placeholder="LinkedIn username"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;