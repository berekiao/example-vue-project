import router from "./router";
import store from "./stores/index";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/helpers/auth"; // get token from cookie

NProgress.configure({ showSpinner: true }); // NProgress Configuration

const whiteList = ["/connexion", "/inscription", "/"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/connexion") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
      NProgress.done();
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const user_roles = store.getters["user/roles"];
      const hasRoles = user_roles && user_roles.length > 0;

      if (hasRoles) {
        let find = false;
        if (to.meta?.roles) {
          for (let role in user_roles) {
            if (to.meta?.roles?.includes(user_roles[role])) find = true;
          }
          if (!find) {
            next("/");
          }
        }
        next();
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          await store.dispatch("user/getInfo");

          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (error) {
          console.error(error || "Has Error");
          await store.dispatch("user/getInfo").catch(async () => {
            // remove token and go to login page to re-login
            await store.dispatch("user/resetToken");
          });
          //
          next(`/connexion?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token*/

    if (
      whiteList.indexOf(to.path) !== -1 ||
      to?.meta?.isAuthenticated == false
    ) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/connexion?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

// helpers
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
/* function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
} */