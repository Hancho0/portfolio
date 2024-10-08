#include <stdio.h>

// 배열 입력 함수
void input_ary(double* array, int size);
// 배열 최댓값 찾기 함수
double find_max(double* array, int size);

int main(void) {
	double ary[5];  // 배열 선언
	double max;     // 최댓값을 저장할 변수
	int size = sizeof(ary) / sizeof(ary[0]);  // 배열 크기 계산

	input_ary(ary, size);  // 배열 입력
	max = find_max(ary, size);  // 최댓값 찾기
	printf("배열의 최댓값 : %.1lf\n", max);  // 결과 출력

	return 0;
}

void input_ary(double *array, int size)
{
	int i;

	printf("%d개의 실수값 입력 : ", size);
	for (i = 0; i < size; i++) {
		// 입력 값이 유효한 실수인지 확인
		while (scanf("%lf", &array[i]) != 1) {
			printf("유효한 숫자를 입력하세요: ");
			while (getchar() != '\n');  // 입력 버퍼 정리
		}
	}
}

double find_max(double* array, int size)
{
	double max;
	int i;

	max = array[0];  // 첫 번째 요소를 최댓값으로 설정
	for (i = 1; i < size; i++) {
		if (array[i] > max) max = array[i];  // 더 큰 값이 있으면 최댓값 갱신
	}
	return max;
}
