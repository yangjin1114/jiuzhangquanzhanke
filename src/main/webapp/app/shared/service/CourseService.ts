import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDto } from 'app/shared/model/course-dto.model';
import { SERVER_API_URL } from 'app/app.constants';
import { CourseWithTNDto } from 'app/shared/model/courseWithTN-dto.model';

@Injectable()
export class CourseService {
    private courseAddressUrl = SERVER_API_URL + '/api/course/findAllCoursesDto';
    private courseAddressWithTNUrl = SERVER_API_URL + '/api/course/findAllCoursesWithTNDto';
    private courseDeleteUrl = SERVER_API_URL + '/api/course/deleteCourse';
    private courseUpdateUrl = SERVER_API_URL + '/api/course/updateCourse';
    private courseRegisterUrl = SERVER_API_URL + '/api/course/registerCourse';
    private courseAddUrl = SERVER_API_URL + '/api/course/addCourse';

    constructor(private http: HttpClient) {}

    getCourseInfo(): Observable<CourseDto[]> {
        return this.http.get<CourseDto[]>(`${this.courseAddressUrl}`);
    }

    getCourseInfoWithTN(): Observable<CourseWithTNDto[]> {
        return this.http.get<CourseWithTNDto[]>(`${this.courseAddressWithTNUrl}`);
    }

    delete(courseName: String): Observable<string> {
        return this.http.delete<string>(`${this.courseDeleteUrl}/${courseName}`);
    }

    update(course: CourseDto): Observable<string> {
        return this.http.put<string>(this.courseUpdateUrl, course);
    }

    register(courseName: String): Observable<string> {
        return this.http.post<string>(`${this.courseRegisterUrl}/${courseName}`, null);
    }

    add(course: CourseDto): Observable<string> {
        return this.http.post<string>(this.courseAddUrl, course);
    }
}
