import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"
import * as Yup from "yup"
import config from "../config"
import { graphql, useStaticQuery } from "gatsby"

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email Required"),
  companyName: Yup.string()
    .matches(
      /^[a-zA-Z0-9-_\s]*$/,
      "Only alphanumeric characters, - , _ and spaces allowed"
    )
    .required("Company Name Required"),
  password: Yup.string().min(8, "Too Short!").required("Password Required"),
  confirmPassword: Yup.string()
    .required("Password Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
})

const SignupForm = props => {
  const data = useStaticQuery(graphql`
    query AllFreeDomains {
      allFreeDomainsCsv {
        nodes {
          Domain
        }
      }
    }
  `)

  const freeDomains = data.allFreeDomainsCsv
  let buttonText = "Start your free trial"

  const isEmailAllowed = email => {
    if (props.freeDomains && freeDomains.nodes) {
      let freeDomain = freeDomains.nodes.find(x => email.endsWith(x.Domain))
      return !freeDomain
    }

    // no list of domains, anything goes
    return true
  }

  const register = async values => {
    let pageUrl = typeof window !== "undefined" ? window.location.pathname : ""
    // remove trailing slash as app side does a === check on the url
    pageUrl = pageUrl.endsWith("/") ? pageUrl.slice(0, -1) : pageUrl

    values.AppUrl = config.frontEndUrl
    values.recaptcha = "ax_ignore_recaptcha"
    values.origin = pageUrl ? pageUrl : "/campaign/risk-management-software"
    values.acceptedTerms = true

    return axios({
      method: "post",
      url: `${config.auth.url}api/Account/Register`,
      data: {
        ...values,
      },
    })
  }

  const login = async (email, password) => {
    let urlData = (function () {
      const params = new URLSearchParams()
      params.append("grant_type", "password")
      params.append("resource", "Phoenix")
      params.append("username", email)
      params.append("password", password)
      params.append("scope", "openid offline_access")
      return params
    })()

    return axios({
      method: "post",
      url: `${config.auth.url}connect/token`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: urlData,
    })
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-11 lg:col-start-2 xl:col-span-10 xl:col-start-3  px-4 text-gray-900 shadow-xl bg-white rounded">
        <Formik
          initialValues={{
            email: "",
            companyName: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            if (isEmailAllowed(values.email)) {
              register(values)
                .then(() => login(values.email, values.password))
                .then(x => {
                  if (window.dataLayer) {
                    window.dataLayer.push({ event: "Website LP Conversion" })
                  }

                  setTimeout(() => {
                    window.location.replace(
                      `${config.frontEndUrl}marketingcampaign?companyName=${values.companyName}&access_token=${x.data.access_token}&refresh_token=${x.data.refresh_token}&expires_in=${x.data.expires_in}`
                    )
                    setSubmitting(false)
                  }, 500)
                })
            } else {
              setSubmitting(false)
              setFieldError("email", "Please use a corporate email")
            }
          }}
        >
          {({ values, isSubmitting }) => {
            return (
              <Form className="px-2 py-4">
                <div>
                  <h2 className="text-xl font-medium">
                    Get started, no credit card required{" "}
                  </h2>
                </div>
                <div>
                  <Field
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="w-full my-4 px-4 py-3 rounded border border-gray-600"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    placeholder="Company Name"
                    name="companyName"
                    className="w-full my-4 px-4 py-3 rounded border border-gray-600"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="w-full my-4 px-4 py-3 rounded border border-gray-600"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    className="w-full my-4 px-4 py-3 rounded border border-gray-600"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex items-center">
                  <span className="ml-2 text-xs">
                    By signing up you agree to Apomatix's{" "}
                    <a
                      href="https://help.apomatix.com/knowledge/terms-and-conditions-platform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-branding font-semibold hover:underline"
                    >
                      Terms & Conditions{" "}
                    </a>
                    and{" "}
                    <a
                      href="https://help.apomatix.com/knowledge/privacy-policy-platform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-branding font-semibold hover:underline"
                    >
                      Privacy Policy.
                    </a>
                  </span>
                </div>
                <div className="flex justify-end mt-4 text-sm text-white font-bold ">
                  <button
                    className="bg-axgreen px-6 py-4 rounded-full transition duration-300 ease-out uppercase tracking-wider flex items-center hover:bg-white hover:text-axgreen border hover:border-axgreen"
                    id="signupBtn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {buttonText}
                  </button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default SignupForm
