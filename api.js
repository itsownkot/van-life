export async function getVans(url) {
   const res = await fetch(url);
   if (!res.ok) {
      throw {
         message: 'Failed to fetch vans',
         statusText: res.statusText,
         status: res.status
      }
   }
   const data = await res.json();
   return data.vans;
}

export async function loginUser(creds) {
   const res = await fetch('/api/login', {method: 'post', body: JSON.stringify(creds)})
   const data = await res.json();

   if (!res.ok) {
      throw {
         message: data.message,
         statusText: data.statusText,
         status: data.status
      }
   }

   return data;
}