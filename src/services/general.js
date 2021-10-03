export const getErrorCase = (data) => {
  switch (data) {
    case 400:
        return 'Informações insuficientes!'
    case 401:
        return 'Usuário não autenticado!'
    case 403: 
        return 'Este pedido não pertence ao BERG!'
    case 404:
        return 'Pedido não encontrado!'
    default:
      return 'Desculpe-nos, mas um erro ocorreu.'
  }
}

export const orderAge = (timeInSeconds) => {
  if (timeInSeconds < 60) {
    return 'agora há pouco';
  } if (timeInSeconds < 3600) {
    const timeInMinutes = Math.round(timeInSeconds / 60);
    return `há ${timeInMinutes} min.`;
  } if (timeInSeconds === 3600) {
    return `há 1 h.`;
  } if (timeInSeconds < 86400 & timeInSeconds % 3600 === 0) {
    const timeInHours = Math.round(timeInSeconds / 3600);
    return `há ${timeInHours} h.`;
  }  if (timeInSeconds < 86400 & timeInSeconds % 3600 !== 0) {
      const timeInHours = Math.trunc(timeInSeconds / 3600);
      console.log(timeInSeconds/3600)
      const timeInMinutes = Math.round(timeInSeconds / 60 - (timeInHours*60));
      return `há ${timeInHours} h e ${timeInMinutes} min.`;
  } if (timeInSeconds < 604800) {
    const timeInDays = Math.round(timeInSeconds / 86400);
    return `há ${timeInDays} d.`;
  } if (timeInSeconds < 2628288) {
    const timeInWeeks = Math.round(timeInSeconds / 604800);
    return `há ${timeInWeeks} sem.`;
  } if (timeInSeconds < 31536000) {
    const timeInMonths = Math.round(timeInSeconds / 2628288);
    return `há ${timeInMonths} m.`;
  } if (timeInSeconds > 31536000) {
    const timeInYears = Math.round(timeInSeconds / 31536000);
    return `há ${timeInYears} a.`;
  }
  if (timeInSeconds === 31536000) {
    const timeInYears = Math.round(timeInSeconds / 31536000);
    return `há ${timeInYears} a.`;
  }
};

export const orderProcessAge = (timeInSeconds) => {
   if (timeInSeconds < 60) {
    const timeInRoundSeconds = Math.round(timeInSeconds);
    return `${timeInRoundSeconds} seg.`;
  } if (timeInSeconds < 3600) {
    const timeInMinutes = Math.round(timeInSeconds / 60);
    return `${timeInMinutes} min.`;
  } if (timeInSeconds === 3600) {
    return `1 h.`;
  } if (timeInSeconds < 86400 & timeInSeconds % 3600 === 0) {
    const timeInHours = Math.round(timeInSeconds / 3600);
    return `${timeInHours} h.`;
  }  if (timeInSeconds < 86400 & timeInSeconds % 3600 !== 0) {
    const timeInHours = Math.trunc(timeInSeconds / 3600);
    console.log(timeInSeconds/3600)
    const timeInMinutes = Math.round(timeInSeconds / 60 - (timeInHours*60));
    return `${timeInHours} h e ${timeInMinutes} min.`;
  } if (timeInSeconds < 604800) {
    const timeInDays = Math.round(timeInSeconds / 86400);
    return `${timeInDays} d.`;
  } if (timeInSeconds < 2628288) {
    const timeInWeeks = Math.round(timeInSeconds / 604800);
    return `${timeInWeeks} sem.`;
  } if (timeInSeconds < 31536000) {
    const timeInMonths = Math.round(timeInSeconds / 2628288);
    return `${timeInMonths} m.`;
  } if (timeInSeconds > 31536000) {
    const timeInYears = Math.round(timeInSeconds / 31536000);
    return `${timeInYears} a.`;
  }
  if (timeInSeconds === 31536000) {
    const timeInYears = Math.round(timeInSeconds / 31536000);
    return `${timeInYears} a.`;
  }
  
};

export const timeToProcess = (initialTime, endTime) => {
  const From = (new Date (initialTime).valueOf())/1000;
  const To = (new Date (endTime).valueOf())/1000;
  const timeToProcess = orderProcessAge(To - From)
  return timeToProcess
}

export const orderCurrentAge = (creationTime) => {
  const orderCurrentAge = orderAge((Date.now() - new Date (creationTime).valueOf())/1000);
  return orderCurrentAge
}


  
