// data/courses/courses.ts
import { Course } from "../../types/courses";

import {specialisationInPrometheusGrafana} from  "./specialisation-in-prometheus-grafana"
import {specialisationInDevops} from "./specialisation-in-devops"
import {specialisationInSplunk} from "./specialisation-in-splunk"
import { specialisationInShellScripting } from "./specialisation-in-shell-scripting";
import { specialisationInJava } from "./specialisation-in-java";
import { specialisationInDocker } from "./specialisation-in-docker";
import { specialisationInMongoDB } from "./specialisation-in-mongodb";
import { specialisationInTerraform } from "./specialisation-in-terraform";
import { specialisationInJenkins } from "./specialisation-in-jenkins";
import { specialisationInAnsible } from "./specialisation-in-ansible";
import { specialisationInKubernetes } from "./specialisation-in-kubernetes";



export const courseInfo: Course[] = [
 
  specialisationInDevops,
  specialisationInPrometheusGrafana,
  specialisationInSplunk,
  specialisationInShellScripting,
  specialisationInJava,
  specialisationInTerraform,
  specialisationInDocker,
  specialisationInMongoDB,
  specialisationInJenkins,
  specialisationInAnsible,
  specialisationInKubernetes



 

]



