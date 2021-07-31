import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import {navigate} from 'gatsby'
import styled from "styled-components"

import Recaptcha from "react-recaptcha"
import Radio from "./radio"
import RadioGroup from "./radiogroup"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
function EmailForm() {
  const [token, setToken] = useState(null)
  return (
    <Formik
      initialValues={{ address: "", elys: "", currency: "", email: "", telegram: "" }}
      onSubmit={(data, {resetForm}) => {
        console.log(data)
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact-form",
              ...data,
            }),
          })
            .then(() => {
              resetForm();
              navigate('/thanks')
            })
            .catch(error => alert(error))

      }}
    >
    {(formik) => (
      <Form
        name="contact-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Field type="hidden" name="form-name" />
        <Field type="hidden" name="bot-field" />

        <Flex style={{marginBottom: "50px"}}>
          <Label htmlFor="name">Name</Label>
            <Field name="name" placeholder="Enter your name" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
          <ErrorMessage name="name" />
        </Flex>
        <br />
        <Flex style={{marginBottom: "50px"}}>
          <Label htmlFor="email">Email Address</Label>
            <Field name="email" placeholder="We will contact you here" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
          <ErrorMessage name="email" />
        </Flex>
        <br />
        <Submit style={{color: "white"}} type="submit">Submit form</Submit>
      </Form>
      )}
    </Formik>
  )
}

export default EmailForm

const HeaderInput = styled.input`
  width: 262px;
  height: 30px;
  background: #FACBAC 0% 0% no-repeat padding-box;
  border: 2px solid #ED6F1B;
  border-radius: 30px;
  opacity: 1;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`


const Label = styled.label`
width: 100%;
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
`

const Styled = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`

const CheckLabel = styled.label`
  background: #FACBAC;
  text-align: left;
  letter-spacing: 0px;
  color: "black";
`;


const CheckInput = styled.input`
&:checked + ${CheckLabel} {
    background: #FACBAC;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureText = styled.p`
  text-align: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: none
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none
  }
`

const Submit = styled.button`
width: 167px;
height: 32px;
float: right;
background: #ED6F1B 0% 0% no-repeat padding-box;
border-radius: 45px;
`
const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
