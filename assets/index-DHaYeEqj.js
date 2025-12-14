(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=document.getElementById("usernameInput"),f=document.getElementById("usernameForm"),l=document.getElementById("username"),u=document.getElementById("infoDiv"),a=document.getElementById("profilePicture");f.addEventListener("submit",e=>{e.preventDefault();const r=m.value.trim().replaceAll("@","").replaceAll(" ","").toLowerCase();s(r)});function d(e){console.log(e.login),l.textContent=`@${e.login}`,a.src=`${e.avatar_url}`,u.innerHTML=`
  <p>Nome: ${e.name??e.login} </p>
  <p>Localização: ${e.location??"Não informado"}</p>
  <p>Instituição: ${e.company??"Não informado"}</p>
  <p>Repositórios públicos: ${e.public_repos??0} </p>
  <p>Seguidores: ${e.followers??0} </p>
  <a href="${e.html_url}">Ir para a conta</a>
  `}const p=()=>{l.textContent="Perfil não encontrado",a.src="https://github.com/github.png",u.innerHTML=`
  <p>Nome: N/A </p>
  <p>Localização: N/A </p>
  <p>Instituição: N/A </p>
  <p>Seguidores: N/A </p>
  `},s=async e=>{try{const r=await fetch(`https://api.github.com/users/${e}`).then(n=>{if(!n.ok)throw p(),new Error("A chamada falhou: Erro "+n.status);return n.json()}).then(n=>{console.log(JSON.stringify(n)),d(n)})}catch(r){console.log(r)}};s("github");
