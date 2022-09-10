import apiClient from "@/useApiClient";

export const appliedTraining = async () => {
  const query = `query {
    allTrainingApplication {
      createdAt,
      requestType,
      participantNo,
      statusFeedback,
      instituteId{
        instituteAbbreviation
      }
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allTrainingApplication;
};

export const getAllInstitutions = async () => {
  const query = `query {
    allInstitute{
      id
      instituteName
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allInstitute;
};

export const createTraining = async (training) => {
  const query = `mutation {
    createTraining(
    topic:"internet security", 
    instituteId: "d6361e63-598f-4ad7-bf43-6ef2227fbead",
    cost: 50000, 
    participantLimit: 200, 
    description: "This is a paid training to all trainers", 
    modeOfDelivery:0, 
    endDate: "2022-12-17T03:24:00", 
    startDate: "2022-12-17T20:24:00", 
    venueId: "Luhanga" 
    theme:"Internet security") {
     createTraining {
      id,
      cost
    }
  }
}`;
  console.log(training);
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.register;
};

export const allTraining = async (limit, skip) => {
  const query = `query  {
    allTraining(first:${limit}, skip:${skip}){
      topic
        id,
      createdAt,
      startDate,
      endDate,
      modeOfDelivery
      status
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allTraining;
};

export const newTraining = async () => {
  const query = `query  {
    allTraining(first:2){
      topic
        id,
      createdAt,
      startDate,
      cost,
      endDate,
      modeOfDelivery
      status
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allTraining;
};
