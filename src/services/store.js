import { writable } from "svelte/store";
import moment from "moment"
const _user = localStorage.getItem("user") && localStorage.getItem("user") != "null"
  ? JSON.parse(localStorage.getItem("user"))
  : null
export const user = writable(_user);
user.subscribe((value) => {
  localStorage.setItem("user", JSON.stringify(value));
});

const _email =
  localStorage.getItem("email") && localStorage.getItem("email") != "null"
    ? localStorage.getItem("email")
    : null;
export const email = writable(_email);
email.subscribe((value) => {
  localStorage.setItem("email", value);
});

const _token =
  localStorage.getItem("token") && localStorage.getItem("token") != "null"
    ? localStorage.getItem("token")
    : null;
export const token = writable(_token);
token.subscribe((value) => {
  localStorage.setItem("token", value);
});


const _lang =
  localStorage.getItem("lang") && localStorage.getItem("lang") != "null"
    ? localStorage.getItem("lang")
    : (navigator.language || navigator.userLanguage).split("-")[0];


export const lang = writable(_lang);
lang.subscribe((value) => {
  document.documentElement.setAttribute("lang", value);
  localStorage.setItem("lang", value);
});

export const toast = writable({});

export const seats = writable(JSON.parse(localStorage.getItem("seats")) || null);
seats.subscribe((value) => {
  localStorage.setItem("seats", JSON.stringify(value));
});

export const timerDiff = writable(null);

export const countDownDate = writable(null);


export const modal = writable(null);

export const isOpenSearchBox = writable(false);

export const socket = writable(null);

let interval = null
countDownDate.subscribe((date) => {
  if (date) {
    interval = setInterval(() => {
      let now = moment()
      let then = moment(date)
      const timeConstant = 600

      let distance = timeConstant - now.diff(then, "seconds")

      let min = Math.floor(distance / 60)
      let sec = distance % 60 < 10 && distance % 60 != 0 ? '0' + (distance % 60) : distance % 60

      timerDiff.set({ min, sec });

      if (distance < 0) {
        timerDiff.set(null)
        clearInterval(interval);
        seats.set(null)
      }

    }, 1000);
  } else {
    if (interval) {
      seats.set(null)
      timerDiff.set({ min: 0, sec: 0 });
      clearInterval(interval)
    }
  }
})

