import Http from "./http";
import ENV from "../env";

const uploadImage = (file) => {
  const formData = new FormData();

  formData.append("file", file);

  return Http.postFormData(`${ENV.API_URL}/services/file-upload`, formData);
};
//USER
const signup = (name, surname, email, phone, password, consent) => {
  let fullName = name + " " + surname;
  return Http.post(`${ENV.API_URL}/user/signup`, {
    fullName,
    email,
    phone,
    password,
    consent,
  });
};

const verifySignup = (userId, authCode) => {
  return Http.post(`${ENV.API_URL}/user/verifySignup`, {
    userId,
    authCode,
  });
};

const changePassword = (oldPassword, newPassword) => {
  return Http.post(`${ENV.API_URL}/user/change-password`, {
    oldPassword, newPassword
  });
};

const resetPasswordRequestWithPhone = (phone) => {
  return Http.post(`${ENV.API_URL}/user/resetPasswordRequestWithPhone`, {
    phone
  });
};


const resetPasswordRequestWithEmail = (email) => {
  return Http.post(`${ENV.API_URL}/user/resetPasswordRequestWithEmail`, {
    email
  });
};

const resetPasswordVerify = (userId, authCode, newPassword) => {
  return Http.post(`${ENV.API_URL}/user/resetPasswordVerify`, {
    userId, authCode, newPassword
  });
};

const refreshVerification = (userId, type) => {
  return Http.post(`${ENV.API_URL}/user/refreshVerification`, {
    userId, type
  });
};


const login = (email, phone, password) => {
  let data = { password }
  if (email) {
    data.email = email
  }

  if (phone) {
    data.phone = phone
  }
  return Http.post(`${ENV.API_URL}/user/login`, data);
};

const verifyToken = () => {
  return Http.post(`${ENV.API_URL}/user/verifyToken`);
};
const checkUser = (email, phone) => {
  let data = {}
  if (email) {
    data.email = email
  }
  if (phone) {
    data.phone = phone
  }
  return Http.get(`${ENV.API_URL}/user/check`, data);
};

// SLIDER
const getSliders = (limit, skip, customQuery = {}) => {
  let data = { customQuery: JSON.stringify(customQuery) };
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  return Http.get(`${ENV.API_URL}/slider`, { ...data });
};

// EVENTS
const getEvents = (limit, skip, customQuery = {}) => {
  let data = { customQuery: JSON.stringify(customQuery) };
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  return Http.get(`${ENV.API_URL}/event`, { ...data });
};
const getEventsWithDetailedFilters = (
  isActive,
  tag,
  startDate,
  endDate,
  show,
  limit,
  skip,
  _id,
  venue,
  category,
  boxOffice,
  organizer
) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  if (_id) {
    data._id = _id;
  }
  if (venue) {
    data.venue = venue;
  }
  if (category) {
    data.category = category;
  }
  if (tag) {
    data.tag = tag;
  }
  if (boxOffice) {
    data.boxOffice = boxOffice;
  }
  if (startDate) {
    data.startDate = startDate;
  }
  if (endDate) {
    data.endDate = endDate;
  }
  if (organizer) {
    data.organizer = organizer;
  }
  if (isActive) {
    data.isActive = isActive;
  }
  if (show) {
    data.show = show;
  }
  return Http.get(`${ENV.API_URL}/event/detailed`, { ...data });
};
const getEventViaPerma = (perma) => {
  return Http.get(`${ENV.API_URL}/event/perma/${perma}`);
};
const getEvent = (eventId) => {
  return Http.get(`${ENV.API_URL}/event/${eventId}`);
};
const getEventsViaCategoryId = (categoryId) => {
  return Http.get(`${ENV.API_URL}/event/viaCategoryId/${categoryId}`);
};

//CATEGORIES
const getCategories = (limit, skip) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  return Http.get(`${ENV.API_URL}/category`, { ...data });
};
const getCategoryViaPerma = (categoryPerma, lang) => {
  return Http.get(
    `${ENV.API_URL}/category/categoryPerma/${categoryPerma}/${lang}`
  );
};
//TAGS
const getTags = (limit, skip) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  return Http.get(`${ENV.API_URL}/tag`, { ...data });
};

// SeatPlans
const getSeatPlanByCustomQuery = (customQuery = {}) => {
  let data = { customQuery: JSON.stringify(customQuery) };
  return Http.get(`${ENV.API_URL}/seatPlan/customQuery`, data);
};

// Blocks
const getBlockByCustomQuery = (customQuery = {}) => {
  let data = { customQuery: JSON.stringify(customQuery) };
  return Http.get(`${ENV.API_URL}/block/customQuery`, data);
};

// Seats
const getSeatsByEventAndBlock = (eventId, blockId) => {
  return Http.get(`${ENV.API_URL}/seat/byEventAndBlock`, { eventId, blockId });
};

// Tickets
const getTicketsByEventAndBlock = (eventId, blockId) => {
  return Http.get(`${ENV.API_URL}/ticket/byEventAndBlock`, {
    eventId,
    blockId,
  });
};

const reserveFromUser = (eventId, seats) => {
  return Http.post(`${ENV.API_URL}/ticket/reserveFromUser`, {
    eventId,
    seats
  });
};

const sellTickets = (
  eventId,
  ticketIds,
  city,
  address,
  identityNumber
) => {
  let data = { eventId, ticketIds, city, address };
  if (identityNumber) {
    data.identityNumber = identityNumber;
  }
  return Http.post(`${ENV.API_URL}/ticket/sellTickets`, data);
};

const cancelReservations = (eventId) => {
  return Http.post(`${ENV.API_URL}/ticket/cancelReservations`, { eventId });
};

const userReservations = (eventId) => {
  return Http.get(`${ENV.API_URL}/ticket/userReservations`, { eventId });
};

// Levels
const levelsByEventId = (eventId) => {
  return Http.get(`${ENV.API_URL}/level/byEventId`, { eventId });
};
// Pages
const getPages = (lang) => {
  let data = {};
  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/page`, { ...data });
};
const getPageViaPerma = (perma) => {
  return Http.get(`${ENV.API_URL}/page/perma/${perma}`);
};

//Generals
const getGenerals = (lang) => {
  let data = {};
  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/general`, { ...data });
};

export default {
  uploadImage,
  //USER
  login,
  signup,
  verifySignup,
  refreshVerification,
  verifyToken,
  checkUser,
  //SLIDER
  getSliders,
  //EVENTS
  getEvents,
  getEventsWithDetailedFilters,
  getEventViaPerma,
  getEvent,
  getEventsViaCategoryId,
  //CATEGORIES
  getCategories,
  getCategoryViaPerma,
  //TAGS
  getTags,

  //seatPlan
  getSeatPlanByCustomQuery,

  //block
  getBlockByCustomQuery,

  //seat
  getSeatsByEventAndBlock,

  //ticket
  getTicketsByEventAndBlock,
  reserveFromUser,
  userReservations,
  sellTickets,
  cancelReservations,
  changePassword,
  resetPasswordRequestWithPhone,
  resetPasswordRequestWithEmail,
  resetPasswordVerify,

  //level
  levelsByEventId,

  //pages
  getPages,
  getPageViaPerma,

  //generals
  getGenerals
};
